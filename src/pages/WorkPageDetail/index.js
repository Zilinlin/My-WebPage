
import React, { Component } from 'react';
import styles from './detail.module.scss';

export default () =>{
    return <div className={ styles.wrap }>
        <div className={ styles.box }>
            <div className={ styles.title }>
               <h1>Combating link dynamics for reliable lora connection in urban settings</h1>
               <h3>Shuai Tong, Zilin Shen, Yunhao Liu, Jiliang Wang</h3>
               <p>Oct 2020 to Mar 2021 <a href="https://maiimg.com/free/?e=dwHjYW9b2l0NY6">PDF</a></p>
            </div>
            <section className={ styles.content }>
                <img src="https://i.postimg.cc/3Rb7T3jD/20211103171113.png" width="500"  ></img>
                <p>
                LoRa, as a representative Low-Power Wide-Area Network (LPWAN) technology, can provide long-range communication for battery-powered IoT devices with a 10-year lifetime. LoRa links in practice, however, experience high dynamics in various environments. When the SNR falls below the threshold (e.g., in the building), a LoRa device disconnects from the network. We propose Falcon, which addresses the link dynamics by enabling data transmission for very low SNR or even disconnected LoRa links. At the heart of Falcon, we reveal that low SNR LoRa links that cannot deliver packets can still introduce interference to other LoRa transmissions. Therefore, Falcon transmits data bits on the low SNR link by selectively interfering with other LoRa transmissions. We address practical challenges in Falcon design. We propose a low-power channel activity detection method to detect other LoRa transmissions for selective interference. To interfere with the so-called interference-resilient LoRa, we accurately estimate the time and frequency offsets on LoRa packets and propose an adaptive frequency adjusting strategy to maximize the interference. We implement Falcon, all using commercial off-the-shelf LoRa devices, and extensively evaluate its performance. The results show that Falcon can provide reliable communication links for disconnected LoRa devices and achieves the SNR boundary upto 7.5 dB lower than that of standard LoRa. </p>
                
            </section>
        </div>
    </div>
}
