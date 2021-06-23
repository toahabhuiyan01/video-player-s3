import React from 'react';
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react';
import { diffString, diff } from 'json-diff';
import changesets from 'diff-json';
import { seek } from 'video-react/lib/actions/player';
// import VideoLength from 'video-length';
import getBlobDuration from 'get-blob-duration'

function ReactPlayero() {

    const [state, setState] = useState(null);
    const [video, setVideo] = useState('https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4');
    const videoJsOptions = {
        autoplay: false,
        controls: true,
        mute:true,
        aspectRatio: "16:9",
        playbackRates: [0.5, 1, 1.5, 2]
    };

    useEffect(() => {
        const video = 'https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4';
        
        if (state) {
            const data = URL.createObjectURL(state);
            setVideo(data);
            getBlobDuration(data)
            .then(function (duration) {
                console.log(duration + ' seconds');
            });
        }

        // VideoLength(video)
        //     .then(len => console.log(len))
        //     .catch(err => console.log(err));
    }, [state])

    useEffect(() => {
        // getVideoDurationInSeconds(
        // 'https://shadhintesttoaha.s3-us-west-2.amazonaws.com/public/Facebook(1).mp4'
        // )
        //     .then((duration) => {
        //         console.log(duration)
        //     })
        //     .catch(err => {
        //         console.log(err);
        // })

        // console.log(diff({
        //     name: 'smith',
        //     coins: [2, 5, 1],
        //     children: [
        //         {name: 'kid3', age: 2},
        //         {name: 'kid1', age: 1},
        //         {name: 'kid2', age: 2}
        //     ]
        // }
        // ,
        // {
        //     name: 'smith',
        //     coins: [2, 5, 1],
        //     children: [
        //         {name: 'kid3', age: 3},
        //         {name: 'kid1', age: 0},
        //         {name: 'kid2', age: 1}
        //     ]
        // }
        // ));

          var newObj, oldObj;
 
        oldObj = {
            "error": false,
            "code": "GENERIC",
            "message": "List of course chapters",
            "data": {
                "count": 1,
                "lepk": "",
                "lesk": "",
                "chapters": [
                    {
                        "PK": "#COURSE#0d51fda7ca798d6d300224223307cdc50e73a96a",
                        "SK": "#CHAPTER#0d52083b288fe4b5f9f1366440370396754a072a",
                        "course_id": "0d51fda7ca798d6d300224223307cdc50e73a96a",
                        "chapter_id": "0d52083b288fe4b5f9f1366440370396754a072a",
                        "title": "Introductions",
                        "description": "Introductions to Java",
                        "number_of_lessons": "1",
                        "total_duration": "0.0",
                        "lessons": [
                            {
                                "name": "What is java",
                                "url": "https://ct-all-bucket-development.s3-us-west-2.amazonaws.com/public/course/sintel.mp4",
                                "duration": 0.0,
                                "is_public": false
                            }
                        ]
                    },
                    {
                        "PK": "#COURSE#0d51fda7ca798d6d300224223307cdc50e73a96a",
                        "SK": "#CHAPTER#0d52083b288fe4b5f9f1366440370396754a072a",
                        "course_id": "0d51fda7ca798d6d300224223307cdc50e73a96a",
                        "chapter_id": "0d52083b288fe4b5f9f1366440370396754a072a",
                        "title": "Introductions",
                        "description": "Introductions to Java",
                        "number_of_lessons": "1",
                        "total_duration": "0.0",
                        "lessons": [
                            {
                                "name": "What is html",
                                "url": "https://ct-all-bucket-development.s3-us-west-2.amazonaws.com/public/course/sintel.mp4",
                                "duration": 0.0,
                                "is_public": false
                            }
                        ]
                    },
                    {
                        "PK": "#COURSE#0d51fda7ca798d6d300224223307cdc50e73a96a",
                        "SK": "#CHAPTER#0d52083b288fe4b5f9f1366440370396754a072a",
                        "course_id": "0d51fda7ca798d6d300224223307cdc50e73a96a",
                        "chapter_id": "0d52083b288fe4b5f9f1366440370396754a072a",
                        "title": "Introductions",
                        "description": "Introductions to Java",
                        "number_of_lessons": "1",
                        "total_duration": "0.0",
                        "lessons": [
                            {
                                "name": "What is Ruby",
                                "url": "https://ct-all-bucket-development.s3-us-west-2.amazonaws.com/public/course/sintel.mp4",
                                "duration": 0.0,
                                "is_public": false
                            }
                        ]
                    }
                ]
            }
        }
        
        newObj = {
            "error": false,
            "code": "GENERIC",
            "message": "List of course chapters",
            "data": {
                "count": 1,
                "lepk": "",
                "lesk": "",
                "chapters": [
                    {
                        "PK": "#COURSE#0d51fda7ca798d6d300224223307cdc50e73a96a",
                        "SK": "#CHAPTER#0d52083b288fe4b5f9f1366440370396754a072a",
                        "course_id": "0d51fda7ca798d6d300224223307cdc50e73a96a",
                        "chapter_id": "0d52083b288fe4b5f9f1366440370396754a072a",
                        "title": "Introductions",
                        "description": "Introductions to Java",
                        "number_of_lessons": "1",
                        "total_duration": "0.0",
                        "lessons": [
                            {
                                "name": "What is java",
                                "url": "https://ct-all-bucket-development.s3-us-west-2.amazonaws.com/public/course/sintel.mp4",
                                "duration": 0.0,
                                "is_public": false
                            },
                            {
                                "name": "What is Python",
                                "url": "https://ct-all-bucket-development.s3-us-west-2.amazonaws.com/public/course/sintel.mp4",
                                "duration": 0.0,
                                "is_public": false
                            },
                            {
                                "name": "What is C++",
                                "url": "https://ct-all-bucket-development.s3-us-west-2.amazonaws.com/public/course/sintel.mp4",
                                "duration": 0.0,
                                "is_public": false
                            }
                        ]
                    },
                    {
                        "PK": "#COURSE#0d51fda7ca798d6d300224223307cdc50e73a96a",
                        "SK": "#CHAPTER#0d52083b288fe4b5f9f1366440370396754a072a",
                        "course_id": "0d51fda7ca798d6d300224223307cdc50e73a96a",
                        "chapter_id": "0d52083b288fe4b5f9f1366440370396754a072a",
                        "title": "Introductions",
                        "description": "Introductions to Java",
                        "number_of_lessons": "1",
                        "total_duration": "0.0",
                        "lessons": [
                            {
                                "name": "What is html",
                                "url": "https://ct-all-bucket-development.s3-us-west-2.amazonaws.com/public/course/sintel.mp4",
                                "duration": 0.0,
                                "is_public": false
                            },
                            {
                                "name": "What is css",
                                "url": "https://ct-all-bucket-development.s3-us-west-2.amazonaws.com/public/course/sintel.mp4",
                                "duration": 0.0,
                                "is_public": false
                            },
                            {
                                "name": "What is javascript",
                                "url": "https://ct-all-bucket-development.s3-us-west-2.amazonaws.com/public/course/sintel.mp4",
                                "duration": 0.0,
                                "is_public": false
                            }
                        ]
                    }
                ]
            }
        }

        // console.log(changesets.diff(oldObj, newObj));
        // console.log(diff(oldObj, newObj))

        // const olda = { name: "toaha" };
        // const newa = { name: "toaha" };


        // console.log(changesets.diff(olda, newa));
        // console.log(diff(olda, newa))

    }, [])
    return (
        <div>
            <ReactPlayer
                // ref={video => setState(video)}
                // onSeek={seek(state)}
                // playbackRate={1}
                playbackRates={[0.5, 1, 1.5, 2]}
                className="playervideo"
                // controls
                {...videoJsOptions}
                // url='https://www.youtube.com/watch?v=xzTXVwQ2WS4'
                url={video}
                // onReady={console.log}
                // onStart={console.log}
                // onPause={console.log}
                // onEnded={console.log}
                // onError={console.log}
                onDuration={console.log}
            />
            {/* <button onClick={() => setState(10)}>up</button> */}
            <input
                type="file"
                onChange={e => setState(e.target.files[0])}
            />
        </div>
    )
}

export default ReactPlayero
