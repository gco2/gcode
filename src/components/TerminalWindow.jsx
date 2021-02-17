import React from 'react';
import Terminal from 'terminal-in-react';

class TerminalWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount () {
    //let _this = this;

  }

  componentWillUnmount() {

  }

  
  render() {
    return (        
      <Terminal
        color='#000'
        outputColor='#000'
        backgroundColor='rgba(0,0,0,0.025)'
        barColor='#000'
        prompt='#000'
        style={{ fontWeight: "normal", fontSize: "12px" }}
        showActions={false}
        hideTopBar={true}
        allowTabs={false}
        commands={{
          'open-google': () => window.open('https://www.google.com/', '_blank'),
          showmsg: this.showMsg,
          popup: (txt) => alert(txt),
          'type-text': (args, print, runCommand) => {
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
        descriptions={{
          'open-google': 'opens google.com',
          showmsg: 'shows a message',
          alert: 'alert', 
          popup: 'alert',
          'type-text': "types a text"
        }}
        msg=''

      />
);
  }
}

export default TerminalWindow;
