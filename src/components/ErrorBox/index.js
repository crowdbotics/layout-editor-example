import React from "react"
import { Text, Layout } from "react-native-ui-kitten"

import styles from "./styles"

export default function ErrorBox({ errorText }) {
  return (
    <Layout style={styles.container}>
      <Text category="s1" status="danger" styles={styles.errorText}>
        <Text category="s2" status="danger" styles={styles.errorText} />
        <Text category="s3" status="danger" styles={styles.errorText}>
          {errorText}
        </Text>
      </Text>
    </Layout>
  )
}
