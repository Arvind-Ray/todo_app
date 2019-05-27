
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import OndropDown from '../../../src/actions/OndropDown.jsx'; // action is imported
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CarouselSection from '../../components/CarouselSection/CarouselSection.jsx';
import Static_data from '../../components/Static_data.jsx';
import Modal from '../../components/Modal.jsx';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class HomePage extends React.Component {
  state = {
    slide:'',
    labelWidth: 0,
  };


  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });

    // this.props.OndropDown();  demo of api call
  }

  handleChange = event => {
    this.setState({ slide: event.target.value });
  };

  render() {
    const { classes } = this.props;

  return (
    <div>
    <form className={classes.root} autoComplete="off">
    <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="shaadi-app"
          >
            Select Slides
          </InputLabel>
          <Select
            value={this.state.slide}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="shaadi-app"
                id="shaad-app"
              />
            }
          >
             {Static_data.map((i, item)=>(
         <MenuItem value={item} key={i+ 1}>{item+ 1}</MenuItem>))}
          </Select>
        </FormControl>
    </form>
    <div > 
         {this.state.slide &&  
         <CarouselSection  stateData = {this.state.slide  } StaticData= {Static_data} />}
         {this.state.slide && 
         <div style={{marginTop: 40, marginLeft:40}}>
          <Modal stateData = {Static_data  }/></div>}
        </div>
    </div>
  );
 }
}

function mapStateToProps(state) {
  const {dropDown} = state;
  return {
    dropDown
  }
};

export default connect(mapStateToProps,{OndropDown})(withStyles(styles)(HomePage));




