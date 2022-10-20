import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export class PreventDragImage extends Plugin {
    static get pluginName() {
        return 'PreventDragImage';
    }

    init() {
        const editor = this.editor;
        const editingView = editor.editing.view;

        editingView.document.on('clipboardInput', (evt, data) => {
            if (editor.isReadOnly) {
                return;
            }

            if (data.method === 'drop' || data.method === 'paste') {
                const dataTransfer = data.dataTransfer;
                let content = dataTransfer.getData('text/html');
                if (!content && dataTransfer.files.length) {
                    //Remove Image from paste
                    evt.stop();
                } else {
                    if (dataTransfer._native.effectAllowed !== 'copyMove' && dataTransfer._native.effectAllowed !== 'uninitialized' && dataTransfer.files.length === 0) {
                        //Remove Image in Text, non-move
                        content = content.replace(/<img[^>]*>/g, '');
                        data.content = this.editor.data.htmlProcessor.toView(content);
                    }
                }
            }
        }, { priority: 'high' });

        editor.plugins.get('ClipboardPipeline').on('inputTransformation', (evt, data) => {
            const dataTransfer = data.dataTransfer;
            let content = dataTransfer.getData('text/html');

            if (data?._isTransformedWithPasteFromOffice) {
                //Remove from Word
                content = content.replace(/<img[^>]*>/g, '');
                data.content = this.editor.data.htmlProcessor.toView(content);
            }

            //Remove all external domain
            if (content) {
                let tmpDiv = document.createElement('div');
                tmpDiv.innerHTML = content;
                tmpDiv.querySelectorAll('img').forEach((elem) => {
                    const { hostname } = new URL(elem.src);
                    if (hostname !== window.location.hostname) {
                        elem.parentNode.removeChild(elem);
                    }
                });

                data.content = this.editor.data.htmlProcessor.toView(tmpDiv.innerHTML);
            }
        });
    }
}