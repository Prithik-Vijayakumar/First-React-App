    import React from "react";
    import PhotoEntry from "./PhotoEntry";
    import entries from "./data/photo-entries.json";

    class AlbumMaker extends React.Component {
        render () {
            return (
                <div className="flex-container">
                   {
                    entries.itemlist.map((pic) => {
                        return <PhotoEntry key={pic.src} src={pic.src} location={pic.location} caption={pic.caption}></PhotoEntry>
                    })
                   } 
                   {/* <PhotoEntry src = 'Berlin.jpg' location = 'Berlin, Germany' caption = 'The Heart of Europe' /> */}
                </div>
            )
        }
    }

    export default AlbumMaker;