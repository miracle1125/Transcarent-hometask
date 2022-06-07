const TreeNode = ({ node, children }) => {
  return (
    <>
      {node}
      {children &&
        children.map((node) => (
          <div key={node.node} className="indent">
            <TreeNode {...node} />
          </div>
        ))}
    </>
  );
};

export default TreeNode;
