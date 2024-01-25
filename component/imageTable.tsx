import React, { useMemo } from "react";
import { ConfigProvider, Table, theme } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTheme } from 'nextra-theme-docs';
import { useMounted } from 'nextra/hooks'

interface DataType {
  key: number;
  name: string;
  category: string[];
  size: string;
  path: string[];
  storage: string;
  sources: any;
  license: any;
  models: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Dataset Name",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    align: "center",
    render: (_, { category }) => (
      <>
        {category.map((item) => (
          <div key={item}>
            {item}
          </div>
        ))}
      </>
    ),
  },
  {
    title: "Training Sample Size",
    dataIndex: "size",
    key: "size",
    align: "center",
    render: (size) => <div style={{ whiteSpace: "pre-line" }}>{size}</div>,
  },
  {
    title: "Path",
    dataIndex: "path",
    key: "path",
    align: "center",
    render: (_, { path }) => (
      <>
        {path.map((item) => (
          <div key={item}>
            {item}
          </div>
        ))}
      </>
    ),
  },
  {
    title: "Storage Accounts",
    dataIndex: "storage",
    key: "storage",
    align: "center",
  },
  {
    title: "Data Sources",
    dataIndex: "sources",
    key: "sources",
    align: "center",
    render: (_, { sources }) => {
      if (sources.length) {
        return (
          <>
            {sources.map((source) => (
              <div key={source}>
                {source}
              </div>
            ))}
          </>
        );
      } else return <>{sources}</>;
    },
  },
  {
    title: "License",
    dataIndex: "license",
    key: "license",
    align: "center",
  },
  {
    title: "Expermented Models",
    dataIndex: "models",
    key: "models",
    align: "center",
  },
];

const data: DataType[] = [
  {
    key: 0,
    name: "Florence 1.0 Image-Text",
    category: ["Image-Text"],
    size: "535M",
    path: ["fld/v1.0/bing-535m-chunk/"],
    storage: "acvdpwu2p003ast~acvdpwu2p003hst",
    sources: [
      "alamy",
      "celebmafia",
      "depositphotos",
      "dreamstime",
      "featurepicsflipboard",
      "freepik",
      "istockphoto",
      "patch",
      "pinterest",
      "left-host",
    ],
    license: "",
    models: "Florence",
  },
  {
    key: 1,
    name: "Florence 1.0 Image-Tag",
    category: ["Image-Tag"],
    size: "322M(280M+42M)",
    path: ["fld/v1.0/bing-280m-chunk/", "fld/v1.0/fwd-42m-chunk/"],
    storage: "acvdpwu2p003ast~acvdpwu2p003hst",
    sources: ["Bing-400K"],
    license: "",
    models: "Florence",
  },
  {
    key: 2,
    name: "Florence 1.1 Image-Text",
    category: ["Image-Text"],
    size: "1.23B(969M+263M)",
    path: ["fld/v1.1/v100-relaxed-chunk/", "fld/v1.1/v110-update-chunk/"],
    storage: "acvdpwu2p003ast~acvdpwu2p003hst",
    sources: [
      "FLIR1.0+",
      "left-host (new)",
      "ShutterStock",
      "Reddit",
      "LAION (high-res)",
    ],
    license: "",
    models: "Florence",
  },
  {
    key: 3,
    name: "Florence 1.5",
    category: ["Image-Text", "Image-Tag"],
    size: "11.9B(9.66B+2.24B)",
    path: [''],
    storage: "",
    sources: '',
    license: "",
    models: "",
  },
  {
    key: 4,
    name: "Bing 400K Expansion",
    category: ["Image-Tag"],
    size: "900M",
    path: ["raw-data/metadata/400k/tsvs/bing-400k-expansion/"],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Bing(400K + Related Searches)"],
    license: "",
    models: "Florence",
  },
  {
    key: 5,
    name: "Google 400K Expansion",
    category: ["Image-Tag"],
    size: "1B",
    path: ["raw-data/metadata/400k/tsvs/google-400k-expansion/"],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Google(400K+ Related Searches)"],
    license: "",
    models: "",
  },
  {
    key: 6,
    name: "Product Data",
    category: ["Image-Text"],
    size: "137M",
    path: ["raw-data/metadata/bing_product_data/tsvs/bing_product_data/"],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Bing Index"],
    license: "",
    models: "",
  },
  {
    key: 7,
    name: "Pexels",
    category: ["Image-Text", "Image-Tag"],
    size: "1M",
    path: ["raw-data/metadata/pexels_sitemap/tsvs/pexels/"],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Pexels Sitemap"],
    license: (
      <a style={{ color: "#69b1ff" }} href="https://www.pexels.com/">
        https://www.pexels.com/
      </a>
    ),
    models: "",
  },
  {
    key: 8,
    name: "Redcaps",
    category: ["Image-Text"],
    size: "12M",
    path: ["raw-data/metadata/redcaps/tsvs/redcaps/"],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Redcaps.xyz"],
    license: (
      <div>
        <a
          style={{ color: "#69b1ff" }}
          href="https://creativecommons.org/licenses/by/4.0/legalcode"
        >
          CC-BY 4.0 license
        </a>
        <br />
        <a style={{ color: "#69b1ff" }} href="https://www.reddit.com/wiki/api/">
          Reddit API terms of use
        </a>
      </div>
    ),
    models: "",
  },
  {
    key: 9,
    name: "LAION 400M",
    category: ["Image-Text"],
    size: "400M",
    path: ["laion400m/tsv/"],
    storage: "acvdpwu2p001est",
    sources: ["Laion 400m website"],
    license: (
      <a
        style={{ color: "#69b1ff" }}
        href="https://creativecommons.org/licenses/by/4.0/"
      >
        Creative Common CC-BY 4.0
      </a>
    ),
    models: "Florence",
  },
  {
    key: 10,
    name: "Shutterstock",
    category: ["Image-Text", "Image-Tag"],
    size: "212M",
    path: ["shutterstock/sitemaps/image/sitemap_images_tsv/"],
    storage: "acvdpwu2p001ast",
    sources: ["Shutterstock sitemap"],
    license: "",
    models: "Florence",
  },
  {
    key: 11,
    name: "bing_snapshot_2021_11_08_data_ge_1000",
    category: ["Image-Text"],
    size: "2.09B(2,098,582,628)",
    path: [
      "raw-data/metadata/snapshot_filter5_data_ge_1000_full_fl025_training_data/",
    ],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Bing Snapshot"],
    license: "",
    models: "",
  },
  {
    key: 12,
    name: "bing_snapshot_2021_11_08_data_rg_20_1000",
    category: ["Image-Text"],
    size: "416M(416,812,890)",
    path: [
      "raw-data/metadata/bing_snapshot_filter5_data_rg_20_1000_fl025_training_data/",
    ],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Bing Snapshot"],
    license: "",
    models: "",
  },
  {
    key: 13,
    name: "bing_image_index_data_en_filter5_data_ge_1000",
    category: ["Image-Text"],
    size: "4.78B(4,784,969,102)",
    path: [
      "raw-data/metadata/bing_image_index_data_en_filter5_data_ge_1000_full_fl025_training_data/",
    ],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Bing Snapshot"],
    license: "",
    models: "",
  },
  {
    key: 14,
    name: "bing_image_index_data_en_filter5_data_rg_20_1000",
    category: ["Image-Text"],
    size: "1.23B(1,238,603,650)",
    path: [
      "raw-data/metadata/bing_image_index_data_en_filter5_data_rg_20_1000_fl025_training_data/",
    ],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Bing Snapshot"],
    license: "",
    models: "",
  },
  {
    key: 15,
    name: "bing_snapshot_2022_02_21_data_rg_20_1000",
    category: ["Image-Text"],
    size: "390M(390,801,169)",
    path: [
      "raw-data/metadata/raw-data/metadata/bing_snapshot_2022_02_21_data_rg_20_1000_fs025_training_data/",
    ],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Bing Snapshot"],
    license: "",
    models: "",
  },
  {
    key: 16,
    name: "bing_snapshot_2022_02_21_data_ge_1000",
    category: ["Image-Text"],
    size: "35.6M(35,664,250)",
    path: [
      "raw-data/metadata/bing_snapshot_2022_02_21_data_ge_1000_fs025_training_data",
    ],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: ["Bing Snapshot"],
    license: "",
    models: "",
  },
  {
    key: 17,
    name: "Wukong_100m",
    category: ["Image-Text"],
    size: "62.6M",
    path: ["metadata/wukong_100m/tsvs/wukong_100m"],
    storage: "acvdpwu2p001ast~acvdpwu2p001hst",
    sources: (
      <a
        style={{ color: "#69b1ff" }}
        href="https://wukong-dataset.github.io/wukong-dataset/"
      >
        Noah-Wukong Dataset
      </a>
    ),
    license: "",
    models: "",
  },
  {
    key: 18,
    name: "COYO  700M",
    category: ["Image-Text"],
    size: "656M",
    path: ["metadata/COYO-700M/data/COYO-700M/"],
    storage: "acvdpwu2p002ast~acvdpwu2p002hst",
    sources: (
      <a
        style={{ color: "#69b1ff" }}
        href="https://github.com/kakaobrain/coyo-dataset"
      >
        https://github.com/kakaobrain/coyo-dataset
      </a>
    ),
    license: "",
    models: "",
  },
  {
    key: 19,
    name: "WIT",
    category: ["Image-Text"],
    size: "11M",
    path: ["stage-data/metadata/WIT/data/train/"],
    storage: "acvdpwu2p002ast~acvdpwu2p002hst",
    sources: "",
    license: "",
    models: "",
  },
  {
    key: 20,
    name: "Laion-5B",
    category: ["Image-Text"],
    size: "laion1B-nolang 1.27 billion\nlaion2B-en 2.32 billion\nlaion2B-multi 2.26 billion",
    path: [
      "stage-data/metadata/laion1b-nolang/",
      "stage-data/metadata/laion2b-en/",
      "stage-data/metadata/laion2b-multi/",
    ],
    storage: "acvdpwu2p002ast~acvdpwu2p002hst",
    sources: (
      <a
        style={{ color: "#69b1ff" }}
        href="https://laion.ai/laion-5b-a-new-era-of-open-large-scale-multi-modal-datasets/"
      >
        https://laion.ai/laion-5b-a-new-era-of-open-large-scale-multi-modal-datasets/
      </a>
    ),
    license: "",
    models: "",
  },
];

const ImageTable: React.FC = () => {
  const nTheme = useTheme()
  const isDark = useMemo(() => nTheme.resolvedTheme == 'light', [nTheme])
  const mounted = useMounted()
  return (
    <div style={{ maxWidth: "75rem" }}>
      <br />
      {
        mounted ? <ConfigProvider
        theme={{
          algorithm:  isDark ? theme.defaultAlgorithm : theme.darkAlgorithm
        }}
        >
        <Table
          bordered
          pagination={false}
          scroll={{ x: "max-content" }}
          columns={columns}
          dataSource={data}
        ></Table>
        </ConfigProvider> : <Table></Table>
      }
    </div>
  )
};

export default ImageTable;
