import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      </script>
      <h1 className={headerStyles.title} />
      <p className={headerStyles.description} />
    </div>
  )
}

export default Header