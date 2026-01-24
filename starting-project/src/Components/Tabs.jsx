// this component is seperated into slots buttons and children, good for large code bases
export default function Tabs({children, buttons}) {
    return(
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
}