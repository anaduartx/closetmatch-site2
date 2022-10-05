import '../styles/faq.css';

const Faq = () => {
    return (
        <>
            <form className='formulario'>
                <h1 className="title">FAQ</h1>
                <div className='faq'>
                    <p className='numero espaco'>01</p>
                    <h3 className='espaco'>Posso adicionar roupas direto no app?</h3>
                </div>
                <div className='faq'>
                    <h1 className='espaco'>Não, todas as roupas serão adicionadas na plataforma por nossa equipe, após o processo de avaliação dos itens.</h1>
                </div>
                <div className='faq'>
                    <p className='numero espaco'>02</p>
                    <h3 className='espaco'>Preciso dar match com um usuário para realizar a troca?</h3>
                </div>
                <div className='faq'>
                    <h1 className='espaco'>Não necessariamente. Caso o usuário do qual você deseja adquirir um produto não queira nenhum item de seu catálogo, você ainda pode adquirir a roupa desejada.</h1>
                </div>
                <div className='faq'>
                    <p className='numero espaco'>03</p>
                    <h3 className='espaco'>É tudo gratuito?</h3>
                </div>
                <div className='faq'>
                    <h1 className='espaco'>Além do frete da entrega das roupas, cobramos apenas uma pequena taxa de serviço.</h1>
                </div>
                <div className='faq'>
                    <p className='numero espaco'>04</p>
                    <h3 className='espaco'>Existe um limite de trocas por mês?</h3>
                </div>
                <div className='faq'>
                    <h1 className='espaco'>Inicialmente, não! Você pode realizar quantas trocas quiser :)</h1>
                </div>
                <div className='faq'>
                    <p className='numero espaco'>05</p>
                    <h3 className='espaco'>Quais são as formas de pagamento disponíveis? </h3>
                </div>
                <div className='faq'>
                    <h1 className='espaco'>Atualmente trabalhamos com pix, cartão e boleto.</h1>
                </div>
            </form>
        </>
    );
}
export default Faq;