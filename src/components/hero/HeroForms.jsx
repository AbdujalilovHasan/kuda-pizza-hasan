import style from './HeroLinks.module.css'

const HeroForm = () => {
    return (
        <div className={style['form']}>
            <div className={style['form-row']}>
                <p className={style['form-text']}>Проверить адрес доставки</p>
                <div className={style['input']}>
                    <i style={{ color: '#FF7010', fontSize: '20px' }} className="bi bi-geo-alt"></i>
                    <input placeholder='Адрес' type='text' />
                </div>
                <button className={style['form-btn']}>Проверить</button>
            </div>
        </div>
    )
}

export default HeroForm