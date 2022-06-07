const TreeNode = ({ node, children, level }) => {
  return (
    <>
      <ul>
        {level + " " + node}
        {children &&
          children.map((node) => (
            <li key={node.node} className="indent">
              <TreeNode {...node} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default TreeNode;
