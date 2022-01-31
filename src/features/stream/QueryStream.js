import { useRef, useEffect, useState } from "react";
import { EditorState, basicSetup } from "@codemirror/basic-setup";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { sql } from "@codemirror/lang-sql";
import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { addQueryStream } from "./streamSlice";
import QueryError from "./QueryError";

const QueryEditor = () => {
  const editor = useRef();
  const [code, setCode] = useState("");

  const dispatch = useDispatch();

  const sendQueryStream = () => {
    dispatch(
      addQueryStream({
        querystream: code,
      })
    );
  };

  const onUpdate = EditorView.updateListener.of((v) => {
    setCode(v.state.doc.toString());
  });

  useEffect(() => {
    const state = EditorState.create({
      doc: "Replace that text to your query",
      extensions: [
        basicSetup,
        keymap.of([defaultKeymap, indentWithTab]),
        sql(),
        onUpdate,
      ],
    });
    const view = new EditorView({ state, parent: editor.current });
    return () => {
      view.destroy();
    };
  }, []);

  const queryErr = useSelector((state) =>
    state.streamAdd.filter((data) => data.message !== "").pop()
  );

  return (
    <div>
      {queryErr ? <QueryError error={queryErr} /> : <span></span>}
      <div ref={editor}></div>
      <Stack direction="row" spacing={1} paddingTop={2}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={sendQueryStream}
        >
          Send
        </Button>
      </Stack>
    </div>
  );
};

export default QueryEditor;
