import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles';

export default class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultInputText: this.props.defaultInputText,
      selectedHours: '01',
      selectedMin: '00',
      visibleHoursList: false,
      visibleMinutsList: false,
      hours:[
        { value:'01' },
        { value:'02' },
        { value:'03' },
        { value:'04' },
        { value:'05' },
        { value:'06' },
        { value:'07' },
        { value:'08' },
        { value:'09' },
        { value:'10' },
        { value:'11' },
        { value:'12' }
      ],
      minuts:[
        { value:'00' },
        { value:'30' },
      ]
    };

    this.classnames = classnames({
      'b-select__option_selected': true
    });

    this.changeTime = this.changeTime.bind(this);
    this.changeHours = this.changeHours.bind(this);
    this.changeMin = this.changeMin.bind(this);
    this.renderHoursList = this.renderHoursList.bind(this);
    this.switchHoursList = this.switchHoursList.bind(this);
    this.switchMinutsList = this.switchMinutsList.bind(this);
  }

  changeTime(){
    this.setState({defaultInputText: `${this.state.selectedHours}:${this.state.selectedMin}`});
  }

  changeMin(event){
    this.setState({selectedMin: event.target.textContent});
    setTimeout(() => {
      this.changeTime();
    }, 0);

  }

  changeHours(event){
    this.setState({selectedHours: event.target.textContent});
    setTimeout(() => {
      this.changeTime();
    }, 0);
  }  

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  renderHoursList(){
    if(this.state.visibleHoursList){
      return (
        <React.Fragment>
          <div className='b-select__options-wrap'>
            {this.state.hours.map((time)=><div className={classnames({'b-select__option': true, 'b-select__option_selected': this.state.selectedHours == time.value})} key={time.value} onClick={this.changeHours}>{time.value}</div>)}
          </div>
          <style jsx>{styles}</style>
        </React.Fragment>
      )
    }
  }

  renderMinuntsList(){
    if(this.state.visibleMinutsList){
      return (
        <React.Fragment>
          <div className='b-select__options-wrap b-select__options-wrap_size_small'>
            {this.state.minuts.map((time)=><div className={classnames({'b-select__option': true, 'b-select__option_selected': this.state.selectedMin == time.value})} key={time.value} onClick={this.changeMin}>{time.value}</div>)}
          </div>
          <style jsx>{styles}</style>
        </React.Fragment>
      )
    }
  }  

  switchHoursList(){
    this.setState({ visibleHoursList: !this.state.visibleHoursList });
  }

  switchMinutsList(){
    this.setState({ visibleMinutsList: !this.state.visibleMinutsList });
  }


  render() {

    const {
      title
    } = this.props;

    // const classTest = classnames({
    //   'b-select__option_selected': true
    // });

    const classes = classnames(
      'b-time-picker',
      // { 'button--transparent': transparent },
      // { 'button--squared': squared },
      // { 'button--accent': accent },
    );

    return (
      <section className={classes}>
        <div className='b-time-picker__wrapper'>
          <div className='b-time-picker__title'>
            {title}
          </div>
          <div className='b-time-picker__input'>
            <div className='b-time-picker__logo'>
              <img src={require('./image/clock2.svg')}/> 
            </div>
            <input type='text' className='b-input' value={this.state.defaultInputText}/>
          </div>
          <div className='b-time-picker__get-time'>
          <div className='b-time-picker__get-time-wrap'>
            <div className='b-select' onClick={this.switchHoursList}>
              <div className='b-select__field'>
                {this.state.selectedHours}
                <div className='b-select__arrow'>
                  <img src={require('./image/previous.svg')}/> 
                </div>
                { this.renderHoursList() }
              </div>
            </div>
            <div className='b-select' onClick={this.switchMinutsList}>
              <div className='b-select__field'>
                {this.state.selectedMin}
                <div className='b-select__arrow'>
                  <img src={require('./image/previous.svg')}/> 
                </div>
                { this.renderMinuntsList() }
              </div>
            </div>            
            </div>
          </div>

        </div>
        <style jsx>{styles}</style>
      </section>
    );
  }
}

TimePicker.propTypes = {
  // onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  defaultInput: PropTypes.string.isRequired,
  // transparent: PropTypes.bool,
  // squared: PropTypes.bool,
  // accent: PropTypes.bool,
};

TimePicker.defaultProps = {
  // transparent: false,
  // squared: false,
  // accent: false,
  title: 'Appointment time'
};