import React, { useRef, useState } from "react";
// import EditorJS from "@editorjs/editorjs";
import EditorJs from "@natterstefan/react-editor-js";
import TOOLS from "../editorjs/config";
import SideNav from "../components/SideNav";
import AddNoteModal from "../components/AddNoteModal";
import AddFolderModal from "../components/AddFolderModal";
import folderAdd from "../assets/folder-outline-add.svg";
import noteAdd from "../assets/document-add.svg";

// TODO Convert page to pdf: https://itnext.io/javascript-convert-html-css-to-pdf-print-supported-very-sharp-and-not-blurry-c5ffe441eb5e

function Note() {
  const editorInstance = useRef(null);
  const [tree, setTree] = useState([
    { title: null, parentId: null, id: 0 },
    { title: "Biology", parentId: 0, id: 1 },
    { title: "Chapter 1", parentId: 1, id: 2 },
    { title: "Chapter 2", parentId: 1, id: 3 },
    { title: "Chapter 3", parentId: 1, id: 4 },
    { title: "Geography", parentId: 0, id: 5 },
    { title: "Cells", parentId: 2, id: 6, noteId: "test" },
    { title: "Biotat", parentId: 2, id: 7, noteId: "biotat" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(tree[0]);
  const [title, setTitle] = useState("");

  // function traverse(node, level, tree) {
  //   if (node.title) console.log(node.title, level);
  //   let children = tree.filter((n) => n.parentId === node.id);
  //   if (children.length === 0) return;
  //   for (let i in children) {
  //     traverse(children[i], level + 1, tree);
  //   }
  // }

  function addFolder(parentFolderId, title, tree) {
    if (!(title.length >= 1)) return;
    let id = tree.length + 1;
    let folder = { parentId: parentFolderId, title, id };
    let newTree = tree;
    newTree.push(folder);
    setTree(newTree);
  }

  function addNote(parentFolderId, title, tree) {
    if (!(title.length >= 1)) return;
    let id = tree.length + 1;
    let noteId = id.toString();
    let folder = { parentId: parentFolderId, title, id, noteId };
    let newTree = tree;
    newTree.push(folder);
    setTree(newTree);
  }
  // const tree = [
  //   {
  //     title: "Beverages",
  //     id: 1873294898,
  //     children: [
  //       {
  //         title: "Water", id: 394529892, value: {
  //           blocks: [
  //             {
  //               type: "quote",
  //               data: {
  //                 text: "The unexamined life is not worth living.",
  //               },
  //             },
  //           ],
  //         }
  //       },
  //       {
  //         title: "Fanta Fruit Twist Fruit TwistFruit Twist",
  //         id: 44855,
  //         children: [
  //           { title: "Fruit Twist", id: 577777777, value: "small can" },
  //           { title: "Orange", id: 67777, value: "test" },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Todo",
  //     id: 7,
  //     children: [
  //       { title: "Go shopping", id: 8, value: "Apples, milk and bread." },
  //       { title: "Clean room", id: 9, value: "Clean desk, monitor." },
  //     ],
  //   },
  //   { title: "Books", id: 10, value: "Maths" },
  // ];
  const [isNavOpen, setNavOpen] = useState(false);
  const [data, setData] = useState({});
  const [numKeyPresses, setKeyPresses] = useState(0);

  const onReady = () => {
    // https://editorjs.io/configuration#editor-modifications-callback
    console.log("Editor.js is ready to work!");
  };

  const onChange = () => {
    // https://editorjs.io/configuration#editor-modifications-callback
    console.log("Now I know that Editor's content changed!");
    // onSave();
  };

  const onSave = async () => {
    if (editorInstance.current) {
      try {
        const outputData = await editorInstance.current.save();
        console.log(outputData);
        setData(outputData);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // if the keyboard has been pressed a few times, save the note
  const handleKeyPress = async () => {
    if (numKeyPresses >= 6) {
      onSave();
      setKeyPresses(0);
    } else {
      setKeyPresses(numKeyPresses + 1);
    }
  };

  return (
    <>
      <SideNav isNavOpen={isNavOpen} tree={tree} />
      <main className={"overflow-x-hidden sm:overflow-x-visible duration-500 " + (isNavOpen ? "ml-32 sm:ml-56" : "")}>
        <nav className={"bg-gray-100 flex items-center justify-start h-8 "}>
          <button
            type="button"
            className="ml-2 text-xl block text-gray-900 hover:text-black focus:text-black focus:outline-none"
            onClick={() => setNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <span>
                <svg
                  viewBox="0 0 14 14"
                  className="fill-current"
                  style={{
                    width: 14,
                    height: 14,
                    flexShrink: 0,
                    backfaceVisibility: "hidden",
                  }}
                  display="block"
                >
                  <path d="M7 2.225L5.775 1 0 7.125l5.775 6.125L7 12.025l-4.55-4.9L7 2.225zm7 0L12.775 1 7 7.125l5.775 6.125L14 12.025l-4.55-4.9 4.55-4.9z" />
                </svg>
              </span>
            ) : (
                <span>&#9776;</span>
              )}
          </button>
          <h2 className="ml-2 text-sm">Biology Notes</h2>
          {/* <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => {
              setShowModal(true);
              setSelectedFolder(tree[0]);
            }}
          >
            Open regular modal
        </button>
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => {
              setShowNoteModal(true);
              setSelectedFolder(tree[0]);
            }}
          >
            Open note modal
        </button> */}
        <div className="flex items-center ml-auto">
          <button className="focus:outline-none px-2"><img className="w-6 h-auto" onClick={() => {
            setShowModal(true);
            setSelectedFolder(tree[0]);
          }} src={folderAdd} alt="Add Folder sign" /></button>
          <button className="focus:outline-none pr-2"><img className="w-6 h-auto" onClick={() => {
            setShowNoteModal(true);
            setSelectedFolder(tree[0]);
          }} src={noteAdd} alt="Add Note sign" /></button>
          </div>
          {/* <svg viewBox="0 0 20 20" className="text-brandBlue-A w-6 h-auto fill-current">
      <path
        // fill="currentColor"
        d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zm-5 8h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z"
      />
    </svg>

    <svg viewBox="0 0 20 20">
      <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 2v10h16V6H2zm7 4V8h2v2h2v2h-2v2H9v-2H7v-2h2z" />
    </svg> */}

        </nav>
        <div className="pt-2 px-4 md:px-12 lg:px-0" onKeyPress={handleKeyPress}>
          <EditorJs
            tools={TOOLS}
            data={data}
            editorInstance={(instance) => {
              editorInstance.current = instance;
            }}
            onChange={onChange}
            onReady={onReady}
          />
        </div>
      </main>
      <AddFolderModal title={"Add a new folder"} closeOnClick={() => {
        setSelectedFolder(tree[0]);
        setShowModal(false);
      }} saveOnClick={() => {
        addFolder(selectedFolder.id, title, tree);
        setSelectedFolder(tree[0]);
        setShowModal(false);
      }} onTitleChange={e => setTitle(e.target.value)}
        showModal={showModal} setShowModal={setShowModal} tree={tree} setSelectedFolder={setSelectedFolder} selectedFolder={selectedFolder} />

      <AddNoteModal title={"Add a new note"} closeOnClick={() => {
        setSelectedFolder(tree[0]);
        setShowNoteModal(false);
      }} saveOnClick={() => {
        addNote(selectedFolder.id, title, tree);
        setSelectedFolder(tree[0]);
        setShowNoteModal(false);
      }} onTitleChange={e => setTitle(e.target.value)}
        showModal={showNoteModal} setShowModal={setShowNoteModal} tree={tree} setSelectedFolder={setSelectedFolder} selectedFolder={selectedFolder} />
    </>
  );
}

export default Note;
