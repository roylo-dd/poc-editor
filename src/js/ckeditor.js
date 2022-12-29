import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic, Strikethrough, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import Context from '@ckeditor/ckeditor5-core/src/context';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import { FontColor, FontSize } from '@ckeditor/ckeditor5-font';
import { ImageInsert, ImageResizeButtons, ImageResizeEditing, ImageResizeHandles } from '@ckeditor/ckeditor5-image';

import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import { LinkImage } from '@ckeditor/ckeditor5-link';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import { TableCaption, TableCellProperties, TableProperties } from '@ckeditor/ckeditor5-table';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import EditorWatchdog from '@ckeditor/ckeditor5-watchdog/src/editorwatchdog';
import ContextWatchdog from '@ckeditor/ckeditor5-watchdog/src/contextwatchdog';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
// import { AllowClassesPlugin } from './includes/allow_classes';
import RestrictedEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode';
import StandardEditingMode from '@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode';

import MathType from '@wiris/mathtype-ckeditor5';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

import Comments from '@ckeditor/ckeditor5-comments/src/comments';
import CommentsRepository from '@ckeditor/ckeditor5-comments/src/comments/commentsrepository';

import '../scss/style.scss';
import mathConfig from './constant/mathConfig';

import { COLOR_PALETTE } from './includes/color_palette';
import { CommentsIntegration } from './includes/custom_comment';
import { PreventDragImage } from './includes/custom_paste_plugin';
import { PreventTyping } from './includes/custom_typing_plugin';
import { CustomUploadAdapterPlugin } from './includes/custom_upload';
import { mediaEmbedConfig } from './includes/media_embed';

// const extraPlugins = [ AllowClassesPlugin ];

const plugin = [ Essentials,
    Paragraph, PasteFromOffice, RemoveFormat, Bold, Italic, Strikethrough, Subscript, Superscript,
    FontSize, FontColor,
    Link,
    Table, TableToolbar, TableCaption, TableProperties, TableCellProperties,
    Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageInsert, ImageResizeEditing, ImageResizeButtons, ImageResizeHandles, LinkImage, MediaEmbed,
    CustomUploadAdapterPlugin, PreventDragImage,
    // UploadAdapter, SimpleUploadAdapter,
    List,
    Alignment,
    MathType,
    WordCount
    // RestrictedEditingMode
    // StandardEditingMode
];

const equationPlugin = [ Essentials,
    Paragraph,
    PreventDragImage, PreventTyping,
    MathType,
    RestrictedEditingMode
    // StandardEditingMode
];

const commentPlugin = [ Essentials,
    Paragraph, PasteFromOffice, RemoveFormat, Bold, Italic, Strikethrough, Subscript, Superscript,
    FontSize, FontColor,
    Link,
    Table, TableToolbar, TableCaption, TableProperties, TableCellProperties,
    Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageInsert, ImageResizeEditing, ImageResizeButtons, ImageResizeHandles, LinkImage, MediaEmbed,
    CustomUploadAdapterPlugin, PreventDragImage,
    // UploadAdapter, SimpleUploadAdapter,
    List,
    Alignment,
    MathType,
    WordCount,
    Comments,
    CommentsRepository
    // RestrictedEditingMode
    // StandardEditingMode
];

const config = {
    toolbar: [ 'undo', 'redo',
        '|',
        'removeFormat',
        'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript',
        '|',
        'fontSize', 'fontColor',
        '|',
        'link', 'insertTable',
        '|',
        'uploadImage', 'mediaEmbed',
        // 'insertImage',
        '|',
        'bulletedList', 'numberedList',
        '|',
        'alignment',
        '|',
        'MathType', 'ChemType'
    ],
    restrictedEditing: {
        allowedCommands: [ 'MathType', 'ChemType' ],
        allowedAttributes: [ 'MathType', 'ChemType' ]
    },
    shouldNotGroupWhenFull: true,
    language: 'en',
    fontColor: {
        colors: COLOR_PALETTE,
        columns: 6
    },
    // fontFamily: {
    //     options: [
    //         'Times New Roman, Times, serif'
    //     ]
    // },
    fontSize: {
        options: [
            'tiny',
            'small',
            'default',
            'big',
            'huge'
        ]
    },
    image: {
        resizeUnit: '%',
        resizeOptions: [
            {
                name: 'resizeImage:original',
                value: null,
                icon: 'original'
            },
            {
                name: 'resizeImage:50',
                value: '25',
                icon: 'small'
            },
            {
                name: 'resizeImage:50',
                value: '50',
                icon: 'medium'
            },
            {
                name: 'resizeImage:75',
                value: '75',
                icon: 'large'
            },
            {
                name: 'resizeImage:100',
                value: '100',
                icon: 'x-large'
            }
        ],
        toolbar: [
            'toggleImageCaption',
            'imageTextAlternative', '|',
            'imageStyle:inline', '|',
            'imageStyle:wrapText', 'imageStyle:breakText', '|',
            'resizeImage', '|', 'linkImage'
        ]
        // insert: {
        //     integrations: [
        //         'insertImageViaUrl'
        //     ]
        // }
    },
    mediaEmbed: mediaEmbedConfig,
    // simpleUpload: {
    //     uploadUrl: `${ CKFINDER_URL }/easy-image.php`
    // },
    table: {
        contentToolbar: [
            'toggleTableCaption', '|', 'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'
        ],
        tableProperties: {
            borderColors: COLOR_PALETTE,
            backgroundColors: COLOR_PALETTE
        },
        tableCellProperties: {
            borderColors: COLOR_PALETTE,
            backgroundColors: COLOR_PALETTE
        }
    },
    licenseKey: process.env.LICENSEKEY,
    uploadServer: ''
};

const equationConfig = {
    toolbar: [
        'MathType', 'ChemType'
    ],
    restrictedEditing: {
        allowedCommands: [ 'MathType', 'ChemType' ],
        allowedAttributes: [ 'MathType', 'ChemType' ]
    },
    mathTypeParameters: {
        editorParameters: { ...mathConfig.mathConfig }
    },
    shouldNotGroupWhenFull: true,
    language: 'en',
    licenseKey: process.env.LICENSEKEY
};

const pocEquationConfig = {
    toolbar: [
        'MathType', 'ChemType'
    ],
    restrictedEditing: {
        allowedCommands: [ 'MathType', 'ChemType' ],
        allowedAttributes: [ 'MathType', 'ChemType' ]
    },
    mathTypeParameters: {
        editorParameters: { ...mathConfig.mathConfig, checkSyntax: 'true' }
    },
    shouldNotGroupWhenFull: true,
    language: 'en',
    licenseKey: process.env.LICENSEKEY
};

// const channelId = "foo"
const commentConfig = {
    toolbar: [
        'comment'
    ],
    shouldNotGroupWhenFull: true,
    extraPlugins: [ CommentsIntegration ],
    language: 'en',
    // collaboration: {
    //     channelId
    // },
    licenseKey: process.env.LICENSEKEY
};


// Plugins to include in the build.
class DemoEditor extends ClassicEditor {
};
DemoEditor.builtinPlugins = plugin;
ClassicEditor.builtinPlugins = plugin;
InlineEditor.builtinPlugins = plugin;

// Editor configuration.
DemoEditor.defaultConfig = config;
ClassicEditor.defaultConfig = {
    ...config, toolbar: config.toolbar.filter(item => item !== 'ChemType'),
    mathTypeParameters: {
        editorParameters: mathConfig.mathConfig
    }
};
InlineEditor.defaultConfig = {
    ...config, toolbar: config.toolbar.filter(item => item !== 'ChemType'),
    mathTypeParameters: {
        editorParameters: mathConfig.mathConfig
    }
};

class EquationInlineEditor extends InlineEditor {
};
EquationInlineEditor.builtinPlugins = equationPlugin;
EquationInlineEditor.defaultConfig = {
    ...equationConfig,
    toolbar: equationConfig.toolbar.filter(item => item !== 'ChemType')
};

class PocEquationInlineEditor extends InlineEditor {
};
PocEquationInlineEditor.builtinPlugins = equationPlugin;
PocEquationInlineEditor.defaultConfig = {
    ...pocEquationConfig,
    toolbar: pocEquationConfig.toolbar.filter(item => item !== 'ChemType')
};

class CommentEditor extends BalloonEditor {
};
CommentEditor.builtinPlugins = commentPlugin;
CommentEditor.defaultConfig = commentConfig;

export default {
    EditorWatchdog,
    ContextWatchdog,
    DemoEditor,
    ClassicEditor,
    InlineEditor,
    EquationInlineEditor,
    PocEquationInlineEditor,
    CommentEditor,
    Context
};
