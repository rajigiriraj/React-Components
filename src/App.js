import SearchName from './container1/SearchName.js';
import SearchState from './container1/SearchState.js';
import State12 from './container1/State12.js';
import Contact from './container2/Contact.js';
import Range from './container2/Range.js';
import Menu from './container2/Menu.js';
import Video from './container2/Video.js';
import Newwindow from './container3/Newwindow.js';
import Back from './container3/Back.js';
import Symbols from './container3/Symbols.js';
import RadioChecked from './container3/RadioChecked.js';
import StarRatings from './container3/StarRatings.js';
import Toggle from './container3/Toggle.js';
import ToggleOff from './container3/ToggleOff.js';
import Ratings from './container2/Ratings.js';

import { RxCrossCircled } from "react-icons/rx";
import { IoIosContact } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { IoIosThumbsUp } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { FaPowerOff } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCheckSquare } from "react-icons/fa";
import { CgRadioChecked } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";


import './App.css';


function App() {
  const searchNames=[
    {
      id:1,
      label:'QUICK SEARCH' ,
      icon:[<RxCrossCircled size={25} color='rgb(102, 103, 103)'/>], 
      type:'name'
    },
    {
      id:2,
      label:'USER NAME' ,
      icon:[<IoIosContact size={25}color='rgb(102, 103, 103)'/>], 
      type:'name'
    },
    {
      id:3,
      label:'*************' ,
      icon:[<FaLock size={20}color='rgb(102, 103, 103)'/>], 
      fontsize:20,
      type:'name'
    }
  ]
  const searchStates=[
    {
      id:1,
      search:'SEARCH',
      icon:[<IoMdSearch size={25}color='white' />]
    },
    {
      id:2,
      search:'SELECT STATE',
      icon:[<FaCaretDown size={25}color='white' />]
    }
  ]
  const states=[
    {
      id:1,
      state:'ALABAMA',
      color:'rgb(102, 103, 103)'
    },
    {
      id:2,
      state:'ALASKA',
      color:'rgb(69, 153, 164)'
    },
    {
      id:3,
      state:'ARIZONA',
      color:'rgb(102, 103, 103)'
    }
  ]

  const ranges=[
    {
      id:1,
      cls:1
    },
    {
      id:2,
      cls:2
    }
  ]
  const ratings=[
    {
      icon:[<FaStar size={20} color='rgb(45, 137, 149)'/>],
      text:'3.6'
    },
    {
      icon:[<SlCalender size={20} color='rgb(102, 103, 103)'/>],
      bgclr:'rgb(45, 137, 149)'
    },
    {
      icon:[<FaStar size={20} color='rgb(45, 137, 149)'/>],
      text:'27'
    },
    {
      icon:[<FaHeart size={20} color='rgb(102, 103, 103)'/>],
      text:'3.6'
    },
    {
      icon:[<IoIosThumbsUp size={30} color='rgb(102, 103, 103)'/>]
    }
  ]
  return (
    <div className='container'>
      <div className='container-1'>
        {searchNames.map(searchName=>{
          return(
            <SearchName 
              label={searchName.label}
              icon={searchName.icon} 
              fontsize={searchName.fontsize} 
              type={searchName.type}/>
          )
        })}

        {searchStates.map(searchState=>{
          return(
            <>
              <SearchState search={searchState.search} icon={searchState.icon}/>
              <br/>
            </>
          )
        })}
        {/* <SearchState search='SEARCH' icon={<IoMdSearch size={25}color='white' />}/>
        <br></br>
        <SearchState search='SELECT STATE' icon={<FaCaretDown size={25}color='white' />}/>
        <br></br> */}
        <SearchState search='SELECT STATE' icon={<FaCaretDown size={25}color='white'/>}/>
        {states.map(state=>{
          return(
          <State12 state={state.state} color={state.color} id={state.id}/>
        )})}

      </div>

      <div className='container-2'>
        <Contact/>
        <div  className='reviews'>
          {ratings.map(rating=>{
            return(
              <Ratings icon={rating.icon} text={rating.text} bgclr={rating.bgclr}/>
            )
          }
          )}
        </div>
        {ranges.map(range=>{
          return(
            <Range cls={range.cls}/>
          )
        })}
        <Menu />
        <Video/>
      </div>
      <div className='container-3'>
        <Newwindow text={'OPEN IN NEW WINDOW'}/>
        <Back text={'BACK TO HOME'}  icon={<TiArrowBack />}/>
        <div className='log'>
          <Newwindow text={'LOGIN'} cls={'login'}/>
          <Back text={'LOGOUT'} cls={'logout'} icon={<FaPowerOff size={20}/>}/>
        </div>
        <div className='icons'>
          <div className='add-minus'>
            <Symbols icon={<FaMinus size={20} color='rgb(102, 103, 103)'/>}/>
            <Symbols icon={<FaPlus size={20} color='rgb(102, 103, 103)' />}/>
          </div>
          <div className='bkw-fwd'>
            <Symbols icon={<IoIosArrowBack size={20}  color='rgb(102, 103, 103)'/>}/>
            <Symbols icon={<IoIosArrowForward size={20}  color='rgb(102, 103, 103)'/>} />
          </div>
        </div>
        <div className='radio-checked'>
          <div className='column1'>
            <RadioChecked  text={'Radio is on'} ischeckedRounded={true} rounded={true}/>
            <RadioChecked  text={'Radio is off'}  ischeckedRounded={false} rounded={true}/>
            <span><RadioChecked icon={<CgRadioChecked color={'rgb(102, 103, 103)'}  size={25}/>} text={'Disabled' } rounded={false}/></span>
          </div>
          <div className='column2'>
            <RadioChecked text={'Checked'} isCheckedSquare={true} squared={true}/>
            <RadioChecked text={'Unchecked'} isCheckedSquare={false} squared={true} />
            <span><RadioChecked icon={<FaRegCheckSquare color={'rgb(102, 103, 103)'} size={20}/>} text={'Disabled'} squared={false}/></span>
          </div>
        </div>
        <div className='toggle-on'>
          <Toggle text={'ON'} className={'toggleOn-bg'} isOn={true} falsetext='OFF'/>
          <Toggle text={'ON'} isOn={true} falsetext='OFF'/>
          <Toggle text={<TiTick size={30}/>} isOn={true} falsetext='OFF'/>
        </div>
        <div className='toggle-off'>
          <ToggleOff text={'OFF'} className={'toggleOff-bg'} isOff={true} ontext='ON'/>
          <ToggleOff text={'OFF'} isOff={true} ontext='ON'/>
          <ToggleOff text={<ImCross size={23}/>} isOff={true} ontext='ON'/>
        </div>
        <div className='stars '>
          <StarRatings color={'rgb(35, 120, 131)'} rating='3.6' classname='star-left'/>
          {[...Array(5)].map(()=>(
            <StarRatings color={'rgb(102, 103, 103)'} classname='stars-right'/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
