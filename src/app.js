import React, {Component} from 'react'
import sound1 from './sound/cymbal.wav'
import sound2 from './sound/openHiHat.wav'
import sound3 from './sound/closeHiHat.wav'
import sound4 from './sound/clap.mp3'
import sound5 from './sound/snare3.wav'
import sound6 from './sound/snare4.wav'
import sound7 from './sound/kickBass.mp3'
import sound8 from './sound/snare1.wav'
import sound9 from './sound/snare2.wav'

import song1 from "./sound/Zedd-Daisy.mp3" 
import song2 from "./sound/Zedd-Papercut.mp3"
import song3 from "./sound/Zedd-Illusion.mp3"
import song4 from "./sound/Sabrina Carpenter - Why.mp3"
import song5 from "./sound/Imagine Dragons - Whatever It Takes.mp3"


let soundList = {
	sound1:'cymbal',
	sound2:'open Hi Hat',
	sound3:'close Hi Hat',
	sound4:'clap',
	sound5:'snare3',
	sound6:'snare4',
	sound7:'kick bass',
	sound8:'snare1',
	sound9:'snare2',
}

export default class App extends Component{
	constructor(){
		super();
		this.state= {
			play:true,
			song:'song1',
			display:'',
			volume:80,
		}
		this.playSound = this.playSound.bind(this);
		this.shorcutPlay = this.shorcutPlay.bind(this);
		this.handleVolume = this.handleVolume.bind(this);

		this.handlePlay = this.handlePlay.bind(this);
		this.handlePause = this.handlePause.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	playSound(sound){
		if(this.state.play){
			console.log(this.refs[sound])
			this.refs[sound].play();
			this.setState(
				{
					display:soundList[sound]
				}
			);

			this.refs[sound].volume = this.state.volume/100
		}
		
		this.refs.focusButton.focus()
	}
	shorcutPlay(e){
		if(this.state.play){
			if (e.key == 'q'){
				this.refs.sound1.load();
				this.refs.sound1.play();
				this.setState(
					{
						display:soundList.sound1
					}
				);
				this.refs.sound1.volume = this.state.volume/100
			}
			if (e.key == 'w'){
				this.refs.sound2.load();
				this.refs.sound2.play();
				this.setState(
					{
						display:soundList.sound2
					}
				);
				this.refs.sound2.volume = this.state.volume/100
			}
			if (e.key == 'e'){
				this.refs.sound3.load();
				this.refs.sound3.play();
				this.setState(
					{
						display:soundList.sound3
					}
				);
				this.refs.sound3.volume = this.state.volume/100
			}
			if (e.key == 'a'){
				this.refs.sound4.load();
				this.refs.sound4.play();
				this.setState(
					{
						display:soundList.sound4
					}
				);
				this.refs.sound4.volume = this.state.volume/100
			}
			if (e.key == 's'){
				this.refs.sound5.load();
				this.refs.sound5.play();
				this.setState(
					{
						display:soundList.sound5
					}
				);
				this.refs.sound5.volume = this.state.volume/100
			}
			if (e.key == 'd'){
				this.refs.sound6.load();
				this.refs.sound6.play();
				this.setState(
					{
						display:soundList.sound6
					}
				);
				this.refs.sound6.volume = this.state.volume/100
			}
			if (e.key == 'z'){
				this.refs.sound7.load();
				this.refs.sound7.play();
				this.setState(
					{
						display:soundList.sound7
					}
				);
				this.refs.sound7.volume = this.state.volume/100
			}
			if (e.key == 'x'){
				this.refs.sound8.load();
				this.refs.sound8.play();
				this.setState(
					{
						display:soundList.sound8
					}
				);
				this.refs.sound8.volume = this.state.volume/100
			}

			if (e.key == 'c'){
				this.refs.sound9.load();
				this.refs.sound9.play();
				this.setState(
					{
						display:soundList.sound9
					}
				);
				this.refs.sound9.volume = this.state.volume/100
			}
		}
	
	}

	handleVolume(e){
		this.setState(
			{
				volume: parseInt(e.target.value)
			}
		);
	}

	handlePlay(){
		this.refs[this.state.song].play()
	}
	handlePause(){
		this.refs[this.state.song].pause()
	}
	handleNext(){
		this.refs[this.state.song].load()
		let random = Math.floor(Math.random() * 5 + 1)
		let song = `song${random}`
		this.refs[song].volume = this.state.volume/100;
		this.refs[song].play();
		this.setState({song:song});
	}

	render(){
		return(
			<div className="allContainer container">
				<button autoFocus onKeyDown={this.shorcutPlay} ref="focusButton" id="focusButton"> focus </button>
				<div className="box row" tabIndex="-1" onFocus={() => this.refs.focusButton.focus()}>

					<div className="side-left row col-8 ">
					
						<button 
							className="col-3" 
							onClick={()=> this.playSound('sound1')} 
							value="Cymbal"
						> Q </button>

						<button 
							className="col-4" 
							onClick={()=> this.playSound('sound2')}
						> W </button>

						<button 
							className="col-3" 
							onClick={()=> this.playSound('sound3')}
						> E </button>

						<button 
							className="col-3"
							onClick={()=> this.playSound('sound4')}
						> A </button>

						<button 
							className="col-4" 
							onClick={()=> this.playSound('sound5')}
						> S</button>

						<button 
							className="col-3" 
							onClick={()=> this.playSound('sound6')}
						>  D</button>

						<button 
							className="col-3" 
							onClick={()=> this.playSound('sound7')}
						> Z </button>

						<button 
							className="col-4" 
							onClick={()=> this.playSound('sound8')}
						> X</button>

						<button
							className="col-3" 
							onClick={()=> this.playSound('sound9')}
						> C</button>
					</div>

					<div className="side-right row col">

						<div className="power ">
							<span>Power</span>

							<div className="power-back" 
							onClick={
								() => this.setState( prevState =>{
									return {play: ! prevState.play}
									}
								 )
							}
							>

								{
									this.state.play ? <div className="on"> </div>
									:
									<div className="off"> </div>
								 }
								
							</div>
						</div>


						<div className="display">
							<span> {this.state.display}</span>
						</div>

						<div className="volume">
						  <input type="range" min="0" max="100" value={this.state.volume} onChange={this.handleVolume}/>
						</div>

						<div className="playSong">
							<button onClick={
								() => this.handleNext()
							}
							> Play a Song </button>

							<div className="control">
								<span onClick={this.handlePlay}> <i className="fa fa-play"></i> </span>
								<span onClick={this.handlePause}> <i className="fa fa-pause"></i> </span>
								<span onClick={this.handleNext}> <i className="fa fa-forward"></i> </span>
							</div>
						</div>



					</div>

				</div>

				<div className="sound row">
					
					<audio controls className="sound1 col-4" ref="sound1">
					  <source src={sound1} type="audio/wav" />
					</audio>
					<audio controls className="sound2 col-4" ref="sound2">
					  <source src={sound2} type="audio/wav"/>
					</audio>
					<audio controls className="sound3 col-4" ref="sound3">
					  <source src={sound3} type="audio/wav"/>
					</audio>
					<audio controls className="sound4 col-4" ref="sound4">
					  <source src={sound4} type="audio/mpeg"/>
					</audio>
					<audio controls className="sound5 col-4" ref="sound5">
					  <source src={sound5} type="audio/wav"/>
					</audio>
					<audio controls className="sound6 col-4" ref="sound6">
					  <source src={sound6} type="audio/wav"/>
					</audio>
					<audio controls className="sound7 col-4" ref="sound7">
					  <source src={sound7} type="audio/mpeg"/>
					</audio>
					<audio controls className="sound8 col-4" ref="sound8">
					  <source src={sound8} type="audio/wav"/>
					</audio>
					<audio controls className="sound9 col-4" ref="sound9">
					  <source src={sound9} type="audio/wav"/>
					</audio>

					<audio controls className="song1 col-4" ref="song1">
					  <source src={song1} type="audio/mpeg"/>
					</audio>
					<audio controls className="song2 col-4" ref="song2">
					  <source src={song2} type="audio/mpeg"/>
					</audio>
					<audio controls className="song3 col-4" ref="song3">
					  <source src={song3} type="audio/mpeg"/>
					</audio>
					<audio controls className="song4 col-4" ref="song4">
					  <source src={song4} type="audio/mpeg"/>
					</audio>
					<audio controls className="song5 col-4" ref="song5">
					  <source src={song5} type="audio/mpeg"/>
					</audio>

				</div>

				<div className="footer">
						<div> Created and Designed By: </div>
						<div style={{color:'lightblue'}}> Andreas Sujono </div>	
					</div>

			</div>
		)
	}
}