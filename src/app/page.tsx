import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.scene}>
        <div className={styles.caption}>
          <span>&ldquo;Beta! Pehle</span>
          <span>bartan chamkao,</span>
          <span>fir hero bano!&rdquo;</span>
        </div>

        <div className={styles.window}>
          <div className={styles.sun} />
          <div className={styles.windowPane} />
          <div className={styles.windowGrill} />
        </div>

        <div className={styles.glow} />

        <div className={styles.utensilStack}>
          <div className={styles.plate} />
          <div className={styles.brassPot} />
        </div>

        <div className={styles.mat}>
          <div className={styles.matPattern} />
        </div>

        <div className={styles.mother}>
          <div className={styles.motherBody}>
            <div className={styles.sariFold} />
          </div>
          <div className={styles.motherHead}>
            <div className={`${styles.motherEye} ${styles.motherEyeLeft}`} />
            <div className={`${styles.motherEye} ${styles.motherEyeRight}`} />
            <div className={`${styles.motherBrow} ${styles.motherBrowLeft}`} />
            <div className={`${styles.motherBrow} ${styles.motherBrowRight}`} />
            <div className={styles.motherMouth} />
          </div>
          <div className={styles.motherHair} />
          <div className={styles.motherBun} />
          <div className={`${styles.motherHand} ${styles.motherHandLeft}`} />
          <div className={`${styles.motherHand} ${styles.motherHandRight}`} />
          <div className={`${styles.bangle} ${styles.bangleLeft}`} />
          <div className={`${styles.bangle} ${styles.bangleRight}`} />
          <div className={styles.motherExpressionLine} />
        </div>

        <div className={styles.ape}>
          <div className={styles.shirt}>
            <div className={styles.shirtPattern} />
          </div>
          <div className={styles.apeHead}>
            <div className={`${styles.apeEar} ${styles.apeEarLeft}`} />
            <div className={`${styles.apeEar} ${styles.apeEarRight}`} />
            <div className={`${styles.apeEye} ${styles.apeEyeLeft}`} />
            <div className={`${styles.apeEye} ${styles.apeEyeRight}`} />
            <div className={`${styles.apeBrow} ${styles.apeBrowLeft}`} />
            <div className={`${styles.apeBrow} ${styles.apeBrowRight}`} />
            <div className={styles.apeSnout}>
              <div className={styles.apeTeeth} />
            </div>
            <div className={styles.apeMouth} />
          </div>
          <div className={styles.apeBody}>
            <div className={styles.apeChest} />
          </div>
          <div className={`${styles.apeArm} ${styles.apeArmLeft}`}>
            <div className={`${styles.apeFist} ${styles.apeFistLeft}`} />
          </div>
          <div className={`${styles.apeArm} ${styles.apeArmRight}`}>
            <div className={`${styles.apeFist} ${styles.apeFistRight}`} />
          </div>
          <div className={styles.apeShorts} />
          <div className={`${styles.apeLeg} ${styles.apeLegLeft}`}>
            <div className={styles.apeFoot} />
          </div>
          <div className={`${styles.apeLeg} ${styles.apeLegRight}`}>
            <div className={styles.apeFoot} />
          </div>
          <div className={styles.apeExpressionLine} />
        </div>

        <div className={styles.speechBeam} />
        <div className={styles.floorHighlight} />
        <div className={styles.grain} />
      </div>
    </div>
  );
}
