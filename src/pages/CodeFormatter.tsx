import React, { useState } from 'react';

import AceEditor from 'react-ace';
import prettier from 'prettier/standalone';
import prettierBabelPlugin from 'prettier/parser-babel';

import 'ace-builds/src-noconflict/mode-json5';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import { AceOptions } from 'react-ace/types';

const CodeFormatter = () => {
  const [options, setOptions] = useState<AceOptions>({
    useWorker: false,
    showLineNumbers: true,
    tabSize: 2,
    wrap: true,
  });
  const [code, setCode] = useState<string>('');
  const [model, setModel] = useState<string>('json');

  const onChange = (newValue: string) => {
    setCode(newValue);
  };
  const onPrettier = () => {
    const prettierStr = prettier.format(code, {
      parser: model,
      plugins: [prettierBabelPlugin],
    });
    setCode(prettierStr);
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Box>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <Box>
            <FormControl>
              <InputLabel id="type-select-label">类型</InputLabel>
              <Select
                labelId="type-select-label"
                label={'类型'}
                variant={'outlined'}
                value={model}
                onChange={(event) => {
                  setModel(event.target.value);
                }}
              >
                <MenuItem value={'json'}>JSON</MenuItem>
                <MenuItem value={'json5'}>JSON5</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Button variant={'contained'} onClick={onPrettier}>
              格式化
            </Button>
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={options.wrap}
                  onChange={(event) => {
                    setOptions({ ...options, wrap: event.target.checked });
                  }}
                />
              }
              label="自动换行"
            />
          </Box>
        </Stack>
      </Box>
      <Box sx={{ mt: 1 }}>
        <AceEditor
          width={'100%'}
          mode={model}
          theme="monokai"
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          setOptions={options}
          editorProps={{ $blockScrolling: true }}
          value={code}
        />
      </Box>
    </Container>
  );
};

export default CodeFormatter;
