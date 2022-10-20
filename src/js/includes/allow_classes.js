export class AllowClassesPlugin {
    editor;

    constructor(editor) {
        this.editor = editor;
    }

    init() {
        const editor = this.editor;

        let allowedAttributes = [
            'width', 'style', 'target', 'class', 'id', 'name', 'title', 'type', 'olddisplay', 'align', 'lang', 'dir',
            'border', 'cellspacing', 'cellpadding', 'color', 'valign', 'clear', 'src', 'height', 'shapes',
            'prefix', 'tagtype', 'datetime', 'cite', 'cols', 'colspan', 'noshade',
            'data-ingestor', 'shape', 'start', 'bgcolor', 'alt', 'strong', 'onclick', 'files',
            'com', 'utc-timestamp', 'eastern-timestamp', 'rowspan', 'span', 'theslate', 'page', 'content',
            'http-equiv', 'action', 'method', 'value', 'autofocus', 'maxlength', 'rows', 'for', 'aria-label', 'checked', 'selected',
            'rel', 'scope', 'location', 'cellpacing', 'block-id', 'guid',
            'data-pubtitle', 'data-paygoid', 'data-docid', 'nowrap',
            'original-style', 'datatype', 'property', 'controls', 'controlslist', 'data-attr', 'poster', 'preload', 'str', 'itemprop',
            'ng-repeat', 'ng-if', 'tabindex', 'role', 'aria-describedby', 'aria-disabled',
            'aria-haspopup', 'onmouseover', 'onmouseout', 'onmouseup', '_cke_focus', 'hotel-location', 'office-location', 'xsd', 'xsi',
            'href_cetemp', 'uie-tracker', 'uie-tracking', 'track-download', 'track-trigger', 'col',
            'doc', 'attach', 'pls', 'vspace', 'hspace', 'slatepath'
        ];

        const schemaEntries = [ '$root', '$block', '$text', 'imageBlock', 'imageInline' ];
        for (let i = 0; i < schemaEntries.length; i++) {
            editor.model.schema.extend(schemaEntries[i], { allowAttributes: allowedAttributes });
        }

        for (let i = 0; i < allowedAttributes.length; i++) {
            editor.conversion.attributeToAttribute({ model: allowedAttributes[i], view: allowedAttributes[i] });
        }


        // editor.model.schema.extend('paragraph', { allowAttributes: '__style' });
        //
        // editor.conversion.for('upcast').attributeToAttribute({
        //     model: {
        //         key: '__style',
        //         name: 'paragraph'
        //     },
        //     view: 'style'
        // });
        //
        // editor.conversion.for('downcast').add((dispatcher:any) => {
        //     dispatcher.on('attribute:__style:paragraph', ({evt, data, conversionApi}:any) => {
        //         conversionApi.consumable.consume(data.item, evt.name);
        //
        //         const viewElement = conversionApi.mapper.toViewElement(data.item);
        //
        //         conversionApi.writer.setAttribute('style', data.attributeNewValue, viewElement);
        //     });
        // });
        //

    }
}