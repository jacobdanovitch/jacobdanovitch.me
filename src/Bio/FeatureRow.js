import React, {Component} from 'react'
import './FeatureRow.css'
import { Media } from 'react-bootstrap'
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider'
import Open from 'material-ui/svg-icons/action/open-in-new'

class FeatureRow extends Component {
    render() {
        return (
            <div>
                <ListItem
                    leftAvatar={<Avatar style={{backgroundColor:"white"}} src={this.props.imgsrc}/>}
                    primaryText={this.props.title}
                    secondaryText={<span style={{color: "rgba(0,0,0,0.7)"}}>{this.props.blurb}</span>}
                    onClick={this.props.handleClick}
                    rightIcon={<Open/>}
                    style={{color:"black", textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}
                />
                <Divider style={{backgroundColor: "black"}}/>
            </div>
        )
    }
}

export default FeatureRow