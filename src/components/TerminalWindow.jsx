import React from 'react';
import Terminal from 'terminal-in-react';
import { useWindupString, WindupChildren, Pace  } from 'windups';

const quotesPool = [
  ["hello world"],
  ["life is beautiful"],
  ["the sun is shining"],
  ["01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111 01110010 01101100 01100100"],
  ["☰☰☰☰☰☰☰☰☰☰☰"],
  ["░░░░▓▓▓▒▒▒▒▒  "],
  ["ESC DEL SUB EOT"],
  ["yes"],
  ["no"],
  ["can you hear me ?"],
  ["whoami"],
  ["≈~"],
  ["it's alright"],
  ["bip"],
  ["everything is connected"],
  ["where is my mind"],
  ["what's that ?"],
  ["<p>this is an HTML tag</p>"],
  ["please say it again"],
  ["#define undefined"],
  ["昔のぼくらはこどもたち"],
  ["◆◆◆◆"]

];

let oldQuoteIndex;
let oldColorIndex;

let randomQuoteButton;
let resultQuote;
let firstQuote = false;

function generateNumber(dataPool) {
  return Math.floor(Math.random() * dataPool.length);
}

function generateNewQuote() {
  let index = generateNumber(quotesPool);

  while (index === oldQuoteIndex) {
    index = generateNumber(quotesPool);
  }
  let newQuote = quotesPool[index];
  let quote = document.getElementById("quote");

  if (quote) {
      quote.innerHTML = newQuote[0];
      resultQuote = newQuote[0];

      oldQuoteIndex = index;

      return resultQuote;
  }
}
    
//Show new quote on 'Random Quote' button click
function onQuoteButtonClick() {
  generateNewQuote();
}

// randomQuoteButton = document.querySelector("#random-quote");
// randomQuoteButton.addEventListener("click", function(){
//     onQuoteButtonClick();
// });

let TerminalData = (props) => {
  if (firstQuote) {
    let q = generateNewQuote();
    props.children.quote = q;
  }

  firstQuote = true;
  return (
    <div className="terminal-data">
      <WindupChildren>
        <Pace getPace={(char) => (char === " " ? 20 : 10)}>
          {/* <div>{Math.floor(Math.random() * 50000)}</div> */}
          <p id="quote">{props.children.quote}</p>
        </Pace>
      </WindupChildren>
    </div>
  );
};

class TerminalWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "type 'help' or try random commands"
    };

    this.focusTerminalInput = this.focusTerminalInput.bind(this);
  }

  componentDidMount () {
    //let _this = this;

    let terminal = document.getElementsByClassName("terminal-base")[0];
    terminal.addEventListener("click", this.focusTerminalInput);
  }

  componentWillUnmount() {

  }

  focusTerminalInput = () => {
    let terminal = document.getElementsByClassName("terminal-base")[0];

    let input = terminal.getElementsByTagName("input")[0];
    input.focus();
  }
  
  render() {
    return (
      <Terminal
        color='#000'
        outputColor='#000'
        backgroundColor='#fbfbfb'
        barColor='#000'
        prompt='#000'
        style={{ fontWeight: "normal", fontSize: "12px" }}
        showActions={false}
        hideTopBar={true}
        allowTabs={false}
        commands={{
          // 'open-google': () => window.open('https://www.google.com/', '_blank'),
          showmsg: this.showMsg,
          alert: (txt) => alert(txt),
          'type': (args, print, runCommand) => {
            const text = args.slice(1).join(' ');
            print('');
            for (let i = 0; i < text.length; i += 1) {
              setTimeout(() => {
                runCommand(`clear`);
                runCommand(`edit-line ${text.slice(0, i + 1)}`);
              }, 100 * i);
            }
          }
        }}
        commandPassThrough={cmd => <TerminalData>{this.state}</TerminalData>}
        descriptions={{
          // 'open-google': 'opens google.com',
          // showmsg: 'shows a message',
          alert: 'alert "text"', 
          'type': "types a text"
        }}
        msg=''
      />
);
  }
}

export default TerminalWindow;
