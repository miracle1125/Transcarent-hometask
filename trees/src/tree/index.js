import TreeNode from "./TreeNode";
import "./index.css";

const inputTreeData = require("./data.json");

const addLevelsToTree = (treeData, parentLevel) =>
  treeData.map((curData, index) => {
    const curNode = `${parentLevel ? `${parentLevel}.` : ""}` + (index + 1);
    return {
      node: curData.node,
      level: curNode,
      children: addLevelsToTree(curData.children, curNode),
    };
  });

const Tree = () => {
  const treeData = addLevelsToTree(inputTreeData);
  return (
    <div className="tree">
      {treeData.map((curData, index) => (
        <TreeNode key={curData + index} {...curData} />
      ))}
    </div>
  );
};

export default Tree;
