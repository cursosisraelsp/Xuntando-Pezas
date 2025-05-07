const Wrapper = ({ children,estilo }: { children: React.ReactNode,estilo: string })=>{
    return <div className={estilo}>{children}</div>
}

export default Wrapper;