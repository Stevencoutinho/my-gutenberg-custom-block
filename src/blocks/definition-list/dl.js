const { InnerBlocks } = wp.editor;
export default {
  name: 'custom-gutenberg-block/dl',
  title: '定義リスト（dl）',
  icon: 'editor-alignleft',
  category: 'common',
  keywords: [],
  edit({attributes, className}) {
    // 許可されるブロックを登録
    const allowedBlocks = [ 'custom-gutenberg-block/dt', 'custom-gutenberg-block/dd' ];
    return (
      <div className={className}>
        <InnerBlocks 
          allowedBlocks={allowedBlocks}
          templateLock={false}
        />
      </div>
    );
  },
  save({className}) {
    return (
      <dl className={className}>
        <InnerBlocks.Content />
      </dl>
    );
  }
};