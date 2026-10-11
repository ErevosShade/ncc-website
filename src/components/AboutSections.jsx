import React from 'react';

export default function AboutSections({ onOpenAnthem }) {
  return (
    <>
      {/* 1. Aim of NCC */}
      <section className="about-card about-card-maroon" aria-labelledby="aim-heading">
        <span className="badge-tag badge-gold">CORE PURPOSE &amp; AIMS</span>
        <h2 id="aim-heading" className="about-card-title">Aim of NCC</h2>
        <p className="about-card-text">
          The ‘Aims’ of the NCC laid out in 1988 have stood the test of time and continue to meet the requirements expected of it in the current socio–economic scenario of the country. The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens. Further, it aims at creating a pool of organized, trained and motivated youth with leadership qualities in all walks of life, who will serve the Nation regardless of which career they choose. Needless to say, the NCC also provides an environment conducive to motivating young Indians to join the armed forces.
        </p>
      </section>

      {/* 2. Our Motto */}
      <section className="about-card about-card-white" aria-labelledby="motto-heading">
        <span className="badge-tag badge-navy">CORPS MOTTO</span>
        <h2 id="motto-heading" className="about-card-title">Our Motto</h2>
        <p className="about-card-text">
          The need for having motto for the Corps was discussed in the 11th Central Advisory Committee (CAC) meeting held on 11 Aug 1978. The mottos suggested were "Duty and Discipline"; "Duty, Unity and Discipline"; "Duty and Unity"; "Unity and Discipline". The final decision for selection of "Unity and Discipline" as motto for the NCC was taken in the 12th CAC meeting held on 12 Oct 1980.
        </p>
      </section>

      {/* 3. NCC Flag */}
      <section className="about-card about-card-white" aria-labelledby="flag-heading">
        <span className="badge-tag badge-red">TRI-SERVICE EMBLEM</span>
        <h2 id="flag-heading" className="about-card-title">NCC Flag</h2>
        <div className="about-flag-content">
          <p className="about-card-text">
            The NCC flag for various units of the NCC was first introduced in 1951. The flag was of same pattern, colour and size as was used by various regiments of the Army. The only difference was that it had the NCC badge and unit designation placed in the centre. Later on it was felt that the flag should be in keeping with the inter-service character of the Corps. In 1954 the existing tricolour flag was introduced. The three colours in the flag depict the three services of the Corps, red for the Army, deep blue for the Navy and light blue for the Air Force. The letters NCC and the NCC crest in gold in the middle of the flag encircled by a wreath of lotus, give the flag a colourful look and a distinct identity.
          </p>
          <div className="about-flag-img-wrapper">
            <img 
              src="/ncc-flag.png" 
              alt="Official National Cadet Corps Flag with red, deep blue, and light blue bands and golden crest" 
              className="about-flag-img"
              width="320"
              height="240"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 4. NCC Song */}
      <section className="about-card about-card-maroon" aria-labelledby="song-heading">
        <span className="badge-tag badge-gold">OFFICIAL ANTHEM</span>
        <div className="about-song-header">
          <div>
            <h2 id="song-heading" className="about-card-title">NCC Song</h2>
            <div className="about-song-subtitle">NCC Song Lyrics</div>
          </div>
          {onOpenAnthem && (
            <button 
              type="button" 
              onClick={onOpenAnthem} 
              className="about-song-play-btn"
              aria-label="Listen to official audio recording of the NCC song"
            >
              <span aria-hidden="true">♫</span> Play Official Audio
            </button>
          )}
        </div>

        <div className="about-song-lyrics">
          <p>
            Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain
          </p>
          <p>
            Apni Manzil Ek Hai,<br />
            Ha, Ha, Ha, Ek Hai,<br />
            Ho, Ho, Ho, Ek Hai.<br />
            Hum Sab Bharatiya Hain.
          </p>
          <p>
            Kashmir Ki Dharti Rani Hai,<br />
            Sartaj Himalaya Hai,<br />
            Saadiyon Se Humne Isko Apne Khoon Se Pala Hai Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge,<br />
            Hum Shamshir Utha Lenge.
          </p>
          <p>
            Bikhre Bikhre Taare Hain Hum Lekin Jhilmil Ek Hai,<br />
            Ha, Ha, Ha, Ek Hai<br />
            Hum Sab Bharatiya Hai.
          </p>
          <p>
            Mandir Gurudwaare Bhi Hain<br />
            Yahan Aur Masjid Bhi Hai Yahan<br />
            Girija Ka Hai Ghariyaal Kahin<br />
            Mullah ki Kahin Hai Ajaan
          </p>
          <p>
            Ek Hee Apna Ram Hain,<br />
            Ek hi Allah Taala Hai, Ek Hee Allah Taala Hain, Raang Birange Deepak Hain Hum,<br />
            Lekin Jagmag Ek Hai,<br />
            Ha, Ha, Ha, Ek Hai, Ho, Ho, Ho, Ek Hai.<br />
            Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain.
          </p>
        </div>
      </section>
    </>
  );
}
