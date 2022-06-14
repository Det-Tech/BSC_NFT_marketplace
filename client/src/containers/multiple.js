import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import ToggleBox from '../components/togglebox';

import '../assets/scss/Home.scss';

import PlusIcon from '../assets/img/plus.png';
import ImageAvatar from '../assets/img/image-avatar.png';
import AuctionHuntIcon from '../assets/img/auctionhunt.png';
import ConnectModal from '../components/connect_wallet_modal';
// import BackIcon from '../assets/images/icons/back.png';

const Home = () => {
  const history = useHistory();
  const [putOnSale, setPutOnSale] = useState(true);
  const [instantSalePrice, setInstantSalePrice] = useState(false);
  const [unlockOnce, setUnlockOnce] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState('');
  const [unlockableContent, setUnlockableContent] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeUnlockableContent = (event) => {
    setUnlockableContent(event.target.value);
  }

  const openModal = () =>{
    setModalOpen(true);
  }
  const closeModal = () =>{
    setModalOpen(false);
  }

  return (
    <div className="home">
    <ConnectModal open = {modalOpen} closeModal = {closeModal} />
      <div className="broadcast text-center">
        <div className="container d-inline-block">
          <div onClick = {history.goBack}>
            <svg viewBox="0 0 14 12" fill="none" width="14" height="14" xlmns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.29436 0.292893C6.68488 -0.0976311 7.31805 -0.0976311 7.70857 0.292893C8.0991 0.683417 8.0991 1.31658 7.70857 1.70711L4.41568 5H12.9985C13.5508 5 13.9985 5.44772 13.9985 6C13.9985 6.55228 13.5508 7 12.9985 7H4.41568L7.70857 10.2929C8.0991 10.6834 8.0991 11.3166 7.70857 11.7071C7.31805 12.0976 6.68488 12.0976 6.29436 11.7071L0.587252 6L6.29436 0.292893Z" fill="currentColor"></path></svg>
            manage collectible type
          </div>
          <p className="title">Create Multiple Collectible</p>
        </div>
      </div>
      <div className="main">
        <div className="container">
          <div className="left">
            <div className="upload-file">
              <p className="title">Upload file</p>
              <div className="file-uploader">
                {
                  previewImage ?
                    <div className="active">
                      <button onClick={() => setPreviewImage(null)}>
                        <svg viewBox="0 0 16 16" fill="none" width="13.200000000000001" height="13.200000000000001" xlmns="http://www.w3.org/2000/svg"><path d="M4 12L12 4" stroke="currentColor" stroke-width="2"></path><path d="M12 12L4 4" stroke="currentColor" stroke-width="2"></path></svg>
                      </button>
                      <img src={previewImage} />
                    </div>
                    : <div className="normal">
                      <label htmlFor="file">Choose File</label>
                      <input type="file" id="file" onChange={handleUpload} />
                      <p>PNG, GIF, WEBP, MP4 or<br /> MP3. Max 30mb</p>
                    </div>
                }
              </div>
            </div>
            <div className="put-on-sale">
              <div className="left">
                <p className="title">Put on sale</p>
                <p className="description">You’ll receive bids on this item</p>
              </div>
              <div className="right">
                <ToggleBox value={putOnSale} onChange={() => setPutOnSale(!putOnSale)} />
              </div>
            </div>
            {
              putOnSale &&
              <div className="instant-sale-price">
                <div className="left">
                  <p className="title">Instant sale price</p>
                  <p className="description">Enter the price for which the item will be<br /> instantly sold</p>
                </div>
                <div className="right">
                  <ToggleBox value={instantSalePrice} onChange={() => setInstantSalePrice(!instantSalePrice)} />
                </div>
              </div>
            }
            <div className="unlock-once-purchased">
              <div>
                <div className="left">
                  <p className="title">Unlock once purchased</p>
                  <p className="description">Content will be unlocked after successful<br /> transaction</p>
                </div>
                <div className="right">
                  <ToggleBox value={unlockOnce} onChange={() => setUnlockOnce(!unlockOnce)} />
                </div>
              </div>
              {
                unlockOnce &&
                <div className="unlockable-content">
                  <textarea value={unlockableContent} onChange={handleChangeUnlockableContent}></textarea>
                  <p>Tip: Markdown syntax is supported</p>
                </div>
              }
            </div>
            <div className="choose-collection">
              <p className="title">Choose collection</p>
              <p className="description">Content will be unlocked after successful<br /> transaction</p>
              <div className="erc-content">
                <div className="item" onClick = {openModal}>
                  <div className="avatar">
                    <img src={PlusIcon} />
                  </div>
                  <p className="title">Create</p>
                  <p className="description">ERC-721</p>
                </div>
                <div className="item">
                  <div className="avatar">
                    <img src={AuctionHuntIcon} />
                  </div>
                  <p className="title">Auction hunt</p>
                  <p className="description">ERC-721</p>
                </div>
              </div>
            </div>
            <div className="name">
              <p className="title">Name</p>
              <input type="text" onInput={handleChangeName} value={name} placeholder="eg. Reedimable T-shirt with logo" />
            </div>
            <div className="description">
              <p className="title">Description <span>(optional)</span></p>
              <input type="text" placeholder="eg. after purchasing tshirt able to get thisrt" />
            </div>
            <div className="properties">
              <div>
                <p className="title">Royalties</p>
                <p className="title">Number of copies</p>
              </div>
              <div>
                <input type="text" placeholder="10" />
                <input type="text" placeholder="eg. 10" />
              </div>
            </div>
            <div className="properties">
                <p className="title">Properties</p>
              <div>
                <input type="text" placeholder="eg. size" />
                <input type="text" placeholder="eg. M" />
              </div>
            </div>
            <button className="connect-wallet">Create item</button>
          </div>
          <div className="right">
            <div>
              <p className="title">Preview</p>
              <div className="preview">
                {
                  previewImage
                    ? <div className="active">
                      <img src={previewImage} alt="" />
                    </div>
                    : <div className="normal">
                      <img src={ImageAvatar} alt="" />
                    </div>
                }
                <p className="name">{name}</p>
                {
                  (name || previewImage) &&
                  <p class="detail">
                    <span><b>Auction</b> 1 of 1</span><br />
                    <span class="bid">Place a bid</span>
                  </p>
                }
              </div>
              {
                unlockableContent &&
                <div className="unlockable-content">{unlockableContent}</div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;