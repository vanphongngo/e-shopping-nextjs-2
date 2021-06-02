import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Product() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chi tiết sản phẩm</title>
      </Head>
      <main>sản phẩm nè</main>
      <Link href="/">
        <button>quay lại</button>
      </Link>
    </div>
  );
}
