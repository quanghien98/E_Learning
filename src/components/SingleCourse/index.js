import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { getDetailCourseFromApi } from "../../actions/course/courseActions";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CheckIcon from '@material-ui/icons/Check';
import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import _ from "lodash";
import Icon from '@material-ui/core/Icon';
import { object } from 'prop-types';
import { from } from 'rxjs';
import Comment from '../Comment';
class SingleCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseDetail: this.props.courseDetail,
            show: true,
        }
    }
    toggleDiv = (idx) => {
        const show = this.state.show;
        this.setState({ show: !show })
        console.log(show);
    }
    addComment= ()=>{
        // this.state.comments.push(this.state.comment);
    }
    onChange = (e) => {
        this.setState({ comment: e.target.value })
    }
    componentDidMount() {
        const pathName = this.props.history.location.pathname;
        console.log(pathName);
        const id = _.last(pathName.split("/"));
        // console.log(id);
        this.props.getDetailCourseFromApi(id);
        this.addComment();
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.courseDetail !== prevState.courseDetail) {
            return {
                courseDetail: nextProps.courseDetail
            }
        }
        return null;
    }
    // {
    //     Object.values(nguoiTao).map((infor, idx) => (
    //         <p key={idx} index={idx}>{infor}</p>
    //     ))
    // }
    render() {
        const { courseDetail } = this.props;
        let nguoiTao = {};
        const Objecttives = [
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, unde.'
            , ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci esse quo vitae assumenda neque voluptates. Molestiae provident suscipit dignissimos!'
            , 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam voluptatum esse aspernatur quod corrupti quos.'
            , 'Lorem ipsum dolor sit amet.'
        ];
        const Requirements = [
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, unde.'
            , ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci esse quo vitae assumenda neque voluptates. Molestiae provident suscipit dignissimos!'
            , 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam voluptatum esse aspernatur quod corrupti quos.'
            , 'Lorem ipsum dolor sit amet.'
        ];
        const CourseContent = [
            { GettingStarted: ['Course Introduction', ' What ?', ' Basic Knownledge'] },
            { CourseProject: ['Frist Information Project', ' Second Information Project', ' Third Information Project'] },
            { EndProject: ['Overview Course', ' End Course', ' Give Away Course'] }
        ]
        const Descriptions = [
            ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, unde.'
            , ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci esse quo vitae assumenda neque voluptates. Molestiae provident suscipit dignissimos!'
            , 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam voluptatum esse aspernatur quod corrupti quos.'
            , 'Lorem ipsum dolor sit amet.'
        ];
        if (this.state.courseDetail.nguoiTao != null) {
            nguoiTao = this.state.courseDetail.nguoiTao;
            console.log(Object.entries(nguoiTao));
        }
        const OBJECTTIVES = Objecttives.map((item) => {
            return <p className='Objecttive'><CheckIcon className='myIcon'></CheckIcon>{item}</p>
        });
        const REQUIREMENTS = Requirements.map((item) => {
            return <p className='Requirement'><AddIcon className='myIcon'></AddIcon>{item}</p>
        });
        const COURSECONTENT = CourseContent.map((item, index) => {
            const classTitle = 'nqhLayout_body_Contents_Title';
            const number = `${index}`
            return (
                <Fragment>
                    <Button outline color="primary" className={classTitle} onClick={() => this.toggleDiv(number)}>{Object.keys(item)}</Button>
                    <div>{Object.values(item).map((valueItem, idx) => {
                        const classString = 'nqhLayout_body_Contents_Wrapper_' + `${number}`;
                        return (<Fragment><div className={(this.state.show ? 'isActive' : 'nonActive')} key={idx} >{valueItem.map((value, index) => {
                            return <p className='nqhLayout_body_Contents_Tagp' key={index}><InsertDriveFileIcon className='myIcon'></InsertDriveFileIcon>{value}</p>

                        })}  <br /></div>
                        </Fragment>)
                    })}</div>
                    <br />
                </Fragment>)
        });
        const DESCRIPTION = Descriptions.map((item) => {
            return <p className='description'><ChevronRightIcon className='myIcon'></ChevronRightIcon>{item}</p>
        });
        // const COMMENTS = this.state.comments.map((item, index) => {
        //     return (
        //         <Fragment>
        //             <div className='comment'>
        //                 <Row>
        //                     <Col xs='3'></Col>
        //                     <Col xs='9'>
        //                         <p>{item}</p>
        //                     </Col>
        //                 </Row>

        //             </div>
        //         </Fragment>)
        // });
        return (
            <div className="nqhLayout">
                <div className='nqhLayout_header'>
                    <Container>
                        <div className="nqhLayout_header_main"><i className="fa fa-yahoo" aria-hidden="true"></i>
                            <Row>
                                <Col xl='8' xs='12'>
                                    <h1 className='nqhLayout_header_main_nameCourse'>{this.props.courseDetail.tenKhoaHoc}</h1>
                                    <p className='nqhLayout_header_main_description'>{courseDetail.moTa}</p>
                                    <Row>
                                        <Col xs='3'><p><span>Views:</span> {courseDetail.luotXem}</p></Col>

                                        <Col xs='9'><p><span>Students:</span> {courseDetail.soLuongHocVien}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col xs='3'><p><span>Created By:</span>{nguoiTao.hoTen}</p></Col>

                                        <Col xs='9'><p><span>Last Updated:</span>{courseDetail.ngayTao}</p></Col>
                                    </Row>
                                    <Row>
                                        <Col xs='3'> <p><span><ChatBubbleOutlineIcon></ChatBubbleOutlineIcon></span> English,Vietnamese</p></Col>
                                        <Col xs='9'><p><span><SubtitlesIcon></SubtitlesIcon></span>English [Auto-generated]</p></Col>
                                    </Row>
                                </Col>
                                <Col xs='4'>
                                    <div className='nqhLayout_header_main_infor'>
                                        <Row className='nqhLayout_header_main_infor_icon'>
                                            <Col xs='12'>
                                                <Row>
                                                    <Col sm='6'>
                                                        <CardGiftcardIcon className='fontIcon'> </CardGiftcardIcon> <span> Gift This Course</span>
                                                    </Col>
                                                    <Col sm='6'><FavoriteBorderIcon className='fontIcon'> </FavoriteBorderIcon> <span> Wish List</span> </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='nqhLayout_header_infor'>
                                        <CardImg className='nqhLayout_header_infor_img' src={this.props.courseDetail.hinhAnh} alt="Card image cap" />
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </Container>
                </div>
                <Container>
                    <div className='nqhLayout_body'>
                        <Row>
                            <Col xs='8'>
                                <div className='nqhLayout_body_Objectives'>
                                    <h3>What'll you learn</h3>
                                    {OBJECTTIVES}
                                </div>
                                <div className='nqhLayout_body_Contents'>
                                    <h3 className='nqhLayout_body_Contents_h3'>Course content</h3>
                                    {COURSECONTENT}
                                </div>
                                <div className='nqhLayout_body_Requirements'>
                                    <h3>Requirements</h3>
                                    {REQUIREMENTS}
                                </div>
                                <div className='nqhLayout_body_Descriptions'>
                                    <h3>Description</h3>
                                    {DESCRIPTION}
                                </div>
                                <div className='nqhLayout_body_Comments'>
                                    {/* <h3>Comment</h3>
                                    <div className='nqhLayout_body_Comments_Details'>
                                        <InputGroup>
                                            <Input placeholder="Comment" onChange={this.onChange} />
                                            <InputGroupAddon addonType="append">
                                                <Button color="danger" onClick={() => this.addComment()}>Post Comment</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                     {COMMENTS} */}





                                </div>
                            </Col>
                            <Col xl='4' xs='12'>
                                <div className='layout_Right'>
                                    <div className='layout_Right_Top'>
                                        <Container>
                                            <h2 className='tag_h2'>Enjoy The Course</h2>
                                            <Button className='btn' color="danger">Add To Cart</Button>
                                            <Button className='btn' color="secondary">Registration Course</Button>
                                            <div className='layout_Right_Top_Waranty'>
                                                <span>
                                                    Always Check To Registration Course
                                                </span>
                                            </div>
                                            <div className='layout_Right_Top_Infor'>
                                                <p>This course includes</p>
                                                <div className='layout_Right_Top_Infor_Span'>
                                                    <span><MovieFilterIcon className='Icon'></MovieFilterIcon>11 hours on-demand video</span>
                                                    <span><InsertDriveFileIcon className='Icon'></InsertDriveFileIcon>13 articles</span>
                                                    <span><FileCopyIcon className='Icon' ></FileCopyIcon>1 downloadable resource</span>
                                                    <span><TimelapseIcon className='Icon'></TimelapseIcon>Full lifetime access</span>
                                                    <span><PhoneAndroidIcon className='Icon'></PhoneAndroidIcon> on mobile and TV</span>
                                                    <span><AcUnitIcon className='Icon'></AcUnitIcon>Certificate of Completion</span>
                                                </div>
                                            </div>
                                            <hr className='myHr'></hr>
                                            <p className='shareInfor'><ScreenShareIcon className='Icon'></ScreenShareIcon>Share</p>

                                        </Container>
                                    </div>
                                    <div className='layout_Right_Bottom'>
                                        <Container>
                                            <h2>Training 5 or more people?</h2>
                                            <p>Get your team access to 3,500+ top Udemy courses anytime, anywhere.</p>
                                            <p className='business'>Try Udemy for Business</p>
                                        </Container>

                                    </div>
                                </div>

                            </Col>
                        </Row>

                    </div>
                </Container>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        courseDetail: state.courseDetail
        // Get Data From Store
    };
};
// const mapDispatchToProps = dispatch => {
//     return {
//         getCourse: () => {
//             dispatch(getDetailCourseFromApi(maKhoaHoc));
//             // Get Data From API And Set To Store
//         }
//     };
// };
export default connect(
    mapStateToProps, { getDetailCourseFromApi })(SingleCourse);

