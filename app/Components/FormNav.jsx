"use client";
import { usePathname } from "next/navigation";
import styles from "./FormNav.module.css";

const FormNav = () => {
  const pathname = usePathname();
  console.log("pathname: ", pathname);

  return (
    <div className={styles.formNav}>
      <div className={styles.stepWrapper}>
        <div
          className={`${styles.number} ${
            pathname === "/" ? styles.active : ""
          }`}
        >
          1
        </div>
        <div className={styles.stepText}>
          <div className={styles.step}>Step 1</div>
          <div className={styles.stepTitle}>Your info</div>
        </div>
      </div>
      <div className={styles.stepWrapper}>
        <div
          className={`${styles.number} ${
            pathname === "/step2" ? styles.active : ""
          }`}
        >
          2
        </div>
        <div className={styles.stepText}>
          <div className={styles.step}>Step 2</div>
          <div className={styles.stepTitle}>Select plan</div>
        </div>
      </div>
      <div className={styles.stepWrapper}>
        <div
          className={`${styles.number} ${
            pathname === "/step3" ? styles.active : ""
          }`}
        >
          3
        </div>
        <div className={styles.stepText}>
          <div className={styles.step}>Step 3</div>
          <div className={styles.stepTitle}>Add-ons</div>
        </div>
      </div>
      <div className={styles.stepWrapper}>
        <div
          className={`${styles.number} ${
            pathname === "/step4" ? styles.active : ""
          }`}
        >
          4
        </div>
        <div className={styles.stepText}>
          <div className={styles.step}>Step 4</div>
          <div className={styles.stepTitle}>Summary</div>
        </div>
      </div>
    </div>
  );
};

export default FormNav;
