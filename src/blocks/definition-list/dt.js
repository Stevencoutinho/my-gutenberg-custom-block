const { RichText } = wp.editor;
export default {
  name: 'custom-gutenberg-block/dt',
  title: 'dt',
  icon: 'editor-alignleft',
  category: 'common',
  parent: [ 'custom-gutenberg-block/dl' ],
  attributes: {
    content: {
      source: 'html',
      selector: 'dt'
    }
  },
  edit({attributes, setAttributes, className}) {
    return (
      <RichText
        className={className}
        tagName='div'
        value={attributes.content}
        onChange={(content) => setAttributes({content})}
      />
    );
  },

  save({attributes}) {
    return (
      <RichText.Content
        tagName='dt'
        value={attributes.content}
      />
    );
  }
};