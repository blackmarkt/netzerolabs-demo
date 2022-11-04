import nftStyles from '../../styles/CarbonNFTs.module.css'

const CarbonNFTs = ( props ) => {

return (
        <div className={nftStyles.nftContainer}>
            {/* <h3 className={nftStyles.SignHeadTxt}>Carbon Offsets</h3> */}
            <div id="vid1" className={nftStyles.videoContainer}>
                {/* <video id="vid_carbon_built" className={nftStyles.videoMask} autoPlay muted loop playsInline preload="none">
                    <source src="/nfts/carbon_built_nft.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video> */}
            </div>
            <div id="vid1" className={nftStyles.videoContainer}>
                {/* <video id="vid_vesta_project" className={nftStyles.videoMask} autoPlay muted loop playsInline preload="none">
                    <source src="/nfts/vesta_project_nft.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video> */}
            </div>
            <div id="vid1" className={nftStyles.videoContainer}>
                {/* <video id="vid_charm_industrial" className={nftStyles.videoMask} autoPlay muted loop playsInline preload="none">
                    <source src="/nfts/charm_industrial_nft.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video> */}
            </div>
            <div id="vid1" className={nftStyles.videoContainer}>
                {/* <video id="vid_charm_industrial" className={nftStyles.videoMask} autoPlay muted loop playsInline preload="none">
                    <source src="/nfts/solar_nft.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video> */}
            </div>
        </div>
    )
}

export default CarbonNFTs