export const VideoContent = (props) => {
    return (
        <div>
            <iframe  style={{maxWidth:'98vw'}} width="560" height="315" src={props.url}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
        </div>
    );
}

