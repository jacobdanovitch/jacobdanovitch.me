import React, {Component} from 'react'
import './FeatureRow.css'
import { Modal, Image } from 'react-bootstrap'
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider'
import Open from 'material-ui/svg-icons/action/open-in-new'

class FeatureRow extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <ListItem
                    leftAvatar={<Avatar style={{backgroundColor:"white"}} src={this.props.imgsrc}/>}
                    primaryText={this.props.title}
                    secondaryText={<span style={{color: "rgba(0,0,0,0.7)"}}>{this.props.blurb}</span>}
                    onClick={this.handleOpen}
                    rightIcon={<Open/>}
                    style={{color:"black", textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}
                />
                <Modal
                    show={this.state.open}
                    onHide={this.handleClose}
                >
                    <Modal.Title>
                        <div style={{display: "table", width: "100%"}}>
                            <Image circle src={this.props.imgsrc} height={50} width={50} style={{float: "left", marginRight:"3%"}}/>
                            <h3 >{this.props.title}</h3>
                        </div>
                        <hr style={{margin:"0"}}/>
                    </Modal.Title>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                </Modal>
                <Divider style={{backgroundColor: "black"}}/>
            </div>
        )
    }
}

export default FeatureRow