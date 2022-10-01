import { Box, Button, Grid } from '@mui/material';
import { FC, useState } from 'react';

import AceEditor from 'react-ace';
import { AceOptions } from 'react-ace/types';

import parserYaml from 'prettier/parser-yaml';
import prettier from 'prettier/standalone';

import YAML from 'yaml';

import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/mode-json';
import 'ace-builds/src-min-noconflict/mode-yaml';
import 'ace-builds/src-min-noconflict/theme-textmate';

const JsonToYaml: FC = () => {
  const [json, setJson] = useState<string>('');
  const [yaml, setYaml] = useState<string>('');
  const [jsonOptions] = useState<AceOptions>({
    useWorker: false,
    showLineNumbers: true,
    tabSize: 2,
    wrap: true,
    fontSize: 14,
  });
  const [yamlOptions] = useState<AceOptions>({
    useWorker: false,
    showLineNumbers: true,
    tabSize: 2,
    wrap: true,
    fontSize: 14,
  });

  const json2yaml = (value: string): string => {
    if (!value || value === '') {
      return value;
    }
    try {
      return prettier.format(YAML.stringify(JSON.parse(value)), {
        parser: 'yaml',
        plugins: [parserYaml],
      });
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.warn(e);
      } else {
        console.warn(e);
      }
      return '';
    }
  };

  const json2yamlBtnClick = () => {
    setYaml(json2yaml(json));
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Box>
        <Button onClick={json2yamlBtnClick}>JSON =&gt; YAML</Button>
      </Box>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ height: '100%' }}>
          <AceEditor
            theme="textmate"
            placeholder="JSON"
            setOptions={jsonOptions}
            value={json}
            onChange={setJson}
            mode="json"
            width="100%"
            height="calc(100% - 37px)"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: '100%' }}>
          <AceEditor
            theme="textmate"
            placeholder="YAML"
            setOptions={yamlOptions}
            value={yaml}
            onChange={setYaml}
            mode="yaml"
            width="100%"
            height="calc(100% - 37px)"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JsonToYaml;
