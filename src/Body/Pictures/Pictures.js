import React, { PureComponent } from 'react';
import './pictures.css';

export default class Picture extends PureComponent
{
    constructor(props)
    {
    super(props);
    this.state={
        picgeneratorlinks: ["https://picsum.photos/1920/1080?random=1",
        "https://picsum.photos/1920/1080?random=2",
        "https://picsum.photos/1920/1080?random=3",
        "https://picsum.photos/1920/1080?random=4"],
        picurl:[],
        // downloadurl:[],
        isLoading:true
    };
    }

    componentDidMount(){

        let promisesarray = [];

        this.state.picgeneratorlinks.map((val, index) => promisesarray[index] = fetch(val))

        /*console.log(promisesarray);*/

        Promise.all(promisesarray)
            .then(data => {

                let url = [];
                
                data.map((val, index) => url[index] = val.url);

                this.setState({isLoading:false, picurl: url})
            })


    }

    render() {

    const loadingstyle = {
        marginBottom:"20px"
    }

    return(
        <div id="pictures-box">
        <span id="title">Your Gallery</span>
        {this.state.isLoading === false ?
        this.state.picurl.map((img, index) => {
            return(
                <a href={img} key={index} rel="noopener noreferrer" target="_blank"><img className="img-holder" src={img} alt="random_photo"></img></a>
            )
        }) : <span style={loadingstyle}>📷Loading images...</span>}
        </div>
    );
    }
}
