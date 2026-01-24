// this uses the rest property (...props) to add the remaining props to its own object 
export default function Section({title, children, ...props }){

    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}


