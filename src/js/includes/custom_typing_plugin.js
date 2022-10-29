import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export class PreventTyping extends Plugin {
    static get pluginName() {
        return 'PreventTyping';
    }

    init() {
        //Todo
        // this.editor.command.forceDisabled("RestrictedEditingMode")
    }

    afterInit() {
        // const config = this.editor.config._config || this.editor.config;
        // const { editorType = '' } = config;
        // if (editorType === 'equation') {
            this.editor.plugins.get('RestrictedEditingModeEditing').enableCommand('MathType');
            this.editor.plugins.get('RestrictedEditingModeEditing').enableCommand('ChemType');
        // }
    }
}