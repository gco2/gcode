import React from 'react';
import systemTools from '../assets/img/ResEditPatch.png' 
import waveFunction from '../assets/img/wave-function.jpg' 
import reabracadabra from '../assets/img/reabracadabra.png' 
import pcbLayout03 from '../assets/img/pcb-layout03.png' 
import pwmMotor from '../assets/img/pwm-motor-555IC.png' 
import treeConcrete from '../assets/img/tree.png' 
import pigeon from '../assets/img/pigeons.png' 
import mc202 from '../assets/img/mc-202.png' 
import rearPanel from '../assets/img/rear-panel.png' 
import dinPatch from '../assets/img/din-patch.png' 
import fastTracker from '../assets/img/fast-tracker.png' 
import sampleWaveform from '../assets/img/sample-waveform.png' 
import apple from '../assets/img/apple.png' 
import windowsHeaven from '../assets/img/windows.png' 

let Window;

class Images extends React.Component {
  constructor(props) {
    super(props);
    
    Window = props.window;
  }

  componentDidMount () {
    //let _this = this;

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div id="windows-images">
        <Window>
          <div id="system-tools">
            <img src={systemTools} alt="system-tools"/>

            <div className="log-info">
            vvvvvvv00000000
            </div>
          </div>
        </Window>

        <Window>
          <div id="wave-function">
            <img src={waveFunction} alt="wave-function"/>

            <div className="log-info">
              z(u, y) = sin(2*u)*cos(2xy)
            </div>
          </div>
        </Window>

        <Window>
          <div id="reabracadabra">
            <img src={reabracadabra} alt="reabracadabra"/>

            <div className="log-info">
              Minitel poem "Reabracadabra" (1985), Eduardo Kac
            </div>
          </div>
        </Window>

        <Window>
          <div id="pcb-layout03">
            <img src={pcbLayout03} alt="pcb-layout03"/>

            <div className="log-info">
              G21 G90 G17
              G0 X0 Y12
              G2 X12 Y0 I0 J-12
            </div>
          </div>
        </Window>

        <Window>
          <div id="pwm-motor">
            <img src={pwmMotor} alt="pwm-motor"/>

            <div className="log-info">
              U1 555 IC
              R1 10k
              R2 10k
              R3 1k
              R4 1k
              RV1 100k potentiometer
              C1 10uF (25v electrolytic)
              C2 10nF
              Q1 IRFZ44N MOSFET
              D1 1N4148
              DC motor
            </div>
          </div>
        </Window>

        <Window>
          <div id="tree-concrete">
            <img src={treeConcrete} alt="tree-concrete"/>

            <div className="log-info">
              a tree surrounded by concrete architecture
            </div>
          </div>
        </Window>

        <Window>
          <div id="pigeon">
            <img src={pigeon} alt="pigeon"/>

            <div className="log-info">
              pigeons seeking seeds
            </div>
          </div>
        </Window>

        <Window>
          <div id="mc-202">
            <img src={mc202} alt="mc-202"/>

            <div className="log-info">
              MC-202 MICRO COMPOSER
              MEMORY CAPACITY:
              Approx. 2600 Steps
              OUTPUT:
              External CV Output

              INPUT (Keyboard Input): CV IN (0V to 5V) : 1
              GATE IN (Turned on With Over + 3V): 1
              TAPE INTERFACE:
              MEMORY SAVE (TAPE SYNC OUT) : 1
              MEMORY LOAD (TAPE SYNC IN) : 1

              DIN SYNC:
              DIN Socket IN: 1
              OUT: 2
              TEMPO:
              Tempo Knob

              DISPLAY:
              Liquid Crystal Display: 1

              SYNTHESIZER SECTION
              KEYBOARD: 32 Key, F scale

              VCO:
              Pulse Width Modulation (50% to Min.)
              PWM Selector Switch (ENV / MAN / LFO)
              Modulation Depth
              Tune ( + 100 Cent)

              SOURCE MIXER:

              VCF:
              Cutoff Frequency (10 Hz to 20 kHz)
              Resonance (0 to Self Oscillation)
              ENV Depth
              Modulation Depth
              Keyboard Follows (0 to 100%)

              VCA:
              Control Signal Selector Switch (ENV ????? / GATE ???? )

              ENV:
              Attack Time (2ms to 1.5s)
              Decay Time (2ms to 5s)
              Sustain Lever (0 to 100%)
              Release Time (1ms to 5s)

              LFO:
              LFO Rate (o.1 Hz to 30 Hz)
              LFO Rate Indicator
              Decay Time (0 to 1s)

              PORTAMENTO:
              Portamento Time (0 to 2s)

              ACCENT

              VOLUME

              CONNECTION JACKS:
              Output (0 dBm max.)
              Headphones (Stereo 8W to 150W)
              DC Input (9V to 12V AC Adaptor PSA – 120, 220 or 240)

              POWER:
              DC 9V (C cell x 6 or PSA – 120, 220 or 240)

              CONSUMPTION:
              800 mW

              DIMENSIONS:
              343 (W) x 55 (H) x 204 (D) mm
              13 – 1 / 2 (W) x 2 – 3 / 16 (H) x 8 (D) inches

              WEIGHT (Batteries Included):
              1.35kg (3 lb.)

              ACCESSORIES:
              2.5m Connection Cable PJ-1 x 1
              Sample Tape (For Demonstration) x 1
              C Cell Batteries (BR-2) x 6
              Operation Manual x 1

              OPTIONS:
              Headphones: RH-10
              AC Adaptor: PSA-120, 220, 240
            </div>
          </div>
        </Window>

        <Window>
          <div id="rear-panel">
            <img src={rearPanel} alt="rear-panel"/>

            <div className="log-info">
              view from the back
            </div>
          </div>
        </Window>

        <Window>
          <div id="din-patch">
            <img src={dinPatch} alt="din-patch"/>

            <div className="log-info">
              everything is connected
            </div>
          </div>
        </Window>

        <Window>
          <div id="fast-tracker">
            <img src={fastTracker} alt="fast-tracker"/>

            <div className="log-info">
              bass sound 1
              fx 1
              bass drum
              fx 2
              clap
              crash cymbal
              bass sound 2
              bass sound 3
              crash cymbal (rev)
              ride cymbal
              bass drum (rev)
              drumhit 1
              drumhit 2
              snare
              bass sound 4
              boom
              voices
              hihat
              bass sound 5
              flute sound
              fx 3
              bongo
            </div>
          </div>
        </Window>

        <Window>
          <div id="sample-waveform">
            <img src={sampleWaveform} alt="sample-waveform"/>

            <div className="log-info">
              freq: 17054Khz 274ms
            </div>
          </div>
        </Window>

        <Window>
          <div id="apple">
            <img src={apple} alt="apple"/>

            <div className="log-info">
              an apple
            </div>
          </div>
        </Window>

        <Window>
          <div id="windows-heaven">
            <img src={windowsHeaven} alt="windows-heaven"/>

            <div className="log-info">
              open space
            </div>
          </div>
        </Window>
      </div>
    );
  }
}

export default Images;
