import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export class PreventTyping extends Plugin {
    static get pluginName() {
        return 'PreventTyping';
    }

    init() {
    }

    afterInit() {
        const mathType = this.editor.commands.get( 'MathType' );
        mathType.on('execute', () => {
            this.editor.execute( 'selectAll' );
            mathType.openEditor()
        })

        this.editor.editing.view.document.on( 'keydown', ( evt, data ) => {
            if ( data.keyCode == 8 ) {
                this.editor.setData("")
            }
        } );

        this.editor.plugins.get('RestrictedEditingModeEditing').enableCommand('MathType');
        this.editor.plugins.get('RestrictedEditingModeEditing').enableCommand('ChemType');
    }
}