export default function Links (props) {
    return(
        <div>
            <h3>Links</h3>
            {/* {console.log(props.github)} */}
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
        </div>
    )
}