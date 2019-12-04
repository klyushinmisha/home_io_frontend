import React, {useState, useRef} from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2';
import GradientButton from '../../../Utils/GradientButton/GradientButton'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');



export default function CodeEditor() {

  const [code, setCode] = useState("# Write your code here")

  function sendCode () {
    console.log(code)
  }


  return (
    <div>
      <CodeMirror
        value={code}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          setCode({value});
        }}
        onChange={(editor, value) => {
        }}
      />
      <div className="row mt-4">
        <GradientButton col1='#98F7CC'
                        col2='#B2FB8D'
                        onClick={()=> sendCode()}> Запуск </GradientButton>
      </div>

    </div>
  )
}
