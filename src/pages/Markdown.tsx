import React from 'react';
import {Container} from '@mui/material';
import {Editor, rootCtx} from '@milkdown/core';
import {ReactEditor, useEditor} from '@milkdown/react';
import {nord} from '@milkdown/theme-nord';
import {commonmark} from '@milkdown/preset-commonmark';

export default function Markdown() {
  const editor = useEditor(root => {
    return Editor.make()
      .config(ctx => {
        ctx.set(rootCtx, root);
      })
      .use(nord)
      .use(commonmark);
  });
  return (
    <Container sx={{pt: 2}}>
      <ReactEditor editor={editor} />
    </Container>
  );
}