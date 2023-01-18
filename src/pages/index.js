import { useContext, useEffect, useState } from "react";
import { FormSearchItem } from "../components/formSearchItem";
import { Header } from "../components/header";
import { Pagination } from "../components/pagination";
import { SectionProducts } from "../components/sectionProducts";
import { api } from "../services/api";
import { GlobalStyle } from "../styles/global";
import Router from "next/router";
import { ThemeContext, ThemeProvider } from "../contextx/themeContext";
import { MessageBox } from "../components/messageBox";


export default function Home(props) {

  const { theme } = useContext(ThemeContext);

  const [dataProducts, setdataProducts] = useState(props.dataProducts)
  const [productName, setPoductName] = useState(props.name)

  console.log(props.error);


  useEffect(() => {
    setdataProducts(props.dataProducts)
    setPoductName(props.name)
  }, [props.name])

  const handleKeyPressInput = () => {
    const input = document.getElementById("input_search_items")
    Router.push(`/?name=${input.value}`)
  }

  return (
    <div>
      <GlobalStyle theme={theme} />
      <Header />
      <FormSearchItem
        label="Buscar produtos"
        handleKeyPressInput={handleKeyPressInput}
        placeholder="Digite o nome do produto"

      />
      {
        dataProducts && dataProducts.products.length > 0 && (
          <>
            <SectionProducts products={dataProducts?.products} />

            <Pagination
              pageCount={dataProducts?.total_pages}
              setdataProducts={setdataProducts}
              product_name={productName}
            />
          </>
        )}

      {
        dataProducts && dataProducts.products.length === 0 && (
          <MessageBox />
        )
      }


    </div>
  )
}

export async function getServerSideProps(context) {


  let dataProducts = null;
  let { name } = context.query
  let error = null

  const mockData = {
    "products": [
      {
        "description": "ACUCAR",
        "gtin": 7896032503052,
        "width": null,
        "height": null,
        "length": null,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2014-04-24T11:07:34.000-03:00",
        "updated_at": "2023-01-17T03:36:50.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7896032503052,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/FD73D264032FFA1239BF3911ACFC7B75.png",
        "gpc": {
          "code": "10000043",
          "description": "Açúcar / Substitutos do Açúcar (Não perecível)"
        },
        "ncm": {
          "code": "17011300",
          "description": "Açúcar de cana mencionado na Nota de subposição 2 do presente Capítulo",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Açúcares brutos sem adição de aromatizantes ou de corantes: - Açúcar de cana mencionado na Nota de subposição 2 do presente Capítulo",
          "ex": null
        }
      },
      {
        "description": "ACUCAR CONF.BRETZKE",
        "gtin": 7896072002034,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2015-01-14T22:00:00.000-02:00",
        "updated_at": "2022-05-25T15:37:44.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7896072002034,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/19EEEBBB3169A054D7C74546BA26B7CB.png",
        "gpc": {
          "code": "10000043",
          "description": "Açúcar / Substitutos do Açúcar (Não perecível)"
        },
        "ncm": {
          "code": "17019100",
          "description": "Adicionados de aromatizantes ou de corantes",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Outros: - Adicionados de aromatizantes ou de corantes",
          "ex": null
        }
      },
      {
        "description": "ACUCAR CONFEITARIA",
        "gtin": 7896087100114,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 1,
        "gross_weight": 1,
        "created_at": "2016-03-18T16:38:30.000-03:00",
        "updated_at": "2022-05-04T09:09:31.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7896087100114,
            "commercial_unit": {
              "type_packaging": "Kilo",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/4D990B3D711BA29A606480778F8228F4.png",
        "ncm": {
          "code": "17049090",
          "description": "Outros",
          "full_description": "Açúcares e produtos de confeitaria - Produtos de confeitaria, sem cacau (incluído o chocolate branco) - Outros - Outros",
          "ex": null
        }
      },
      {
        "description": "ACUCAR REF.DOLCE",
        "gtin": 7896060102210,
        "thumbnail": "https://cdn-cosmos.bluesoft.com.br/products/7896060102210",
        "width": null,
        "height": null,
        "length": null,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2014-04-24T11:07:34.000-03:00",
        "updated_at": "2023-01-16T11:40:36.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7896060102210,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/269A8C98918E68E651F2F60EBC1CB389.png",
        "gpc": {
          "code": "10000043",
          "description": "Açúcar / Substitutos do Açúcar (Não perecível)"
        },
        "ncm": {
          "code": "17019900",
          "description": "Outros",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Outros: - Outros",
          "ex": null
        }
      },
      {
        "description": "PACOCA S ACUCAR",
        "gtin": 7898379440755,
        "width": null,
        "height": null,
        "length": null,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2016-01-19T14:03:12.000-02:00",
        "updated_at": "2023-01-17T01:16:18.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898379440755,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/156D76A9D4EEE4064B2A32129099FE5E.png",
        "ncm": {
          "code": "20071000",
          "description": "Preparações homogeneizadas",
          "full_description": "Preparações de produtos hortícolas, de frutas ou de outras partes de plantas - Doces, geleias, marmelades, purês e pastas de fruta, obtidos por cozimento, mesmo com adição de açúcar ou de outros edulcorantes. - Preparações homogeneizadas",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR TOPÇUCAR",
        "gtin": 7898932776154,
        "width": null,
        "height": null,
        "length": null,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2018-07-24T15:25:32.000-03:00",
        "updated_at": "2023-01-16T02:20:52.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898932776154,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/4C0A555761F3EFB6D7E83F9792AA7603.png",
        "brand": {
          "name": "TOPÇÚCAR",
          "picture": "/assets/brand-placeholder-7080174fbd24025783105a607811edad.png"
        },
        "ncm": {
          "code": "17019900",
          "description": "Outros",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Outros: - Outros",
          "ex": null
        }
      },
      {
        "description": "ACUCAR MASCAVO",
        "gtin": 7898954007137,
        "width": null,
        "height": null,
        "length": null,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2016-03-25T15:31:51.000-03:00",
        "updated_at": "2023-01-16T05:08:46.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898954007137,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/BD7BF11E714FE43194662C8D9E79E67E.png",
        "ncm": {
          "code": "17019900",
          "description": "Outros",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Outros: - Outros",
          "ex": null
        }
      },
      {
        "description": "PACOCA S ACUCAR",
        "gtin": 7898268910178,
        "thumbnail": "https://cdn-cosmos.bluesoft.com.br/products/7898268910178",
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2014-04-24T11:07:34.000-03:00",
        "updated_at": "2023-01-13T03:08:38.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898268910178,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/9B49B15812B649CD5A9724A30FAE687F.png",
        "brand": {
          "name": "AIRON",
          "picture": "/assets/brand-placeholder-7080174fbd24025783105a607811edad.png"
        },
        "ncm": {
          "code": "20079990",
          "description": "Outros",
          "full_description": "Preparações de produtos hortícolas, de frutas ou de outras partes de plantas - Doces, geleias, marmelades, purês e pastas de fruta, obtidos por cozimento, mesmo com adição de açúcar ou de outros edulcorantes. - Outros: - Outros - Outros",
          "ex": null
        },
        "cest": {
          "id": 2138,
          "code": "1709400",
          "description": "Doces, geléias, “marmelades”, purês e pastas de frutas, obtidos por cozimento, com ou sem adição de açúcar ou de outros edulcorantes, em embalagens de conteúdo inferior ou igual a 1 kg, exceto as embalagens individuais de conteúdo inferior ou igual a 10 g",
          "parent_id": 1671
        }
      },
      {
        "description": "BISCOITO.CHAMPANHE COM ACUCAR",
        "gtin": 7891962005324,
        "thumbnail": "https://cdn-cosmos.bluesoft.com.br/products/7891962005324",
        "width": null,
        "height": null,
        "length": null,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2016-01-19T14:17:35.000-02:00",
        "updated_at": "2023-01-12T12:04:01.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7891962005324,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          },
          {
            "gtin": 17891962005321,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": 0,
              "layer": 0
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/0390DB751B70B5E4AAD1C519FB35DB27.png",
        "brand": {
          "name": "BAUDUCCO",
          "picture": "https://cdn-cosmos.bluesoft.com.br/brands/brand_bauducco"
        },
        "gpc": {
          "code": "10000161",
          "description": "Biscoitos / Bolachas (Não perecíveis)"
        },
        "ncm": {
          "code": "19053100",
          "description": "Bolachas e biscoitos, adicionados de edulcorantes",
          "full_description": "Preparações à base de cereais, farinhas, amidos, féculas ou de leite; produtos de pastelaria - Produtos de padaria, pastelaria ou da indústria de bolachas e biscoitos, mesmo adicionados de cacau; hóstias, cápsulas vazias para medicamentos, obreias, pastas secas de farinha, amido ou fécula, em folhas, e produtos semelhantes. - Bolachas e biscoitos, adicionados de edulcorantes; waffles e wafers: - Bolachas e biscoitos, adicionados de edulcorantes",
          "ex": null
        }
      },
      {
        "description": "ACUCAR GUIMARAES",
        "gtin": 7896775178135,
        "thumbnail": "https://cdn-cosmos.bluesoft.com.br/products/7896775178135",
        "width": null,
        "height": null,
        "length": null,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2014-04-24T11:07:34.000-03:00",
        "updated_at": "2023-01-13T05:49:28.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7896775178135,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          },
          {
            "gtin": 17896775178132,
            "commercial_unit": {
              "type_packaging": "Caixa",
              "quantity_packaging": 30,
              "ballast": 7,
              "layer": 7
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/E4A553F9D83C2F261F1279321C4C2980.png",
        "brand": {
          "name": "GUIMARAES",
          "picture": "/assets/brand-placeholder-7080174fbd24025783105a607811edad.png"
        },
        "gpc": {
          "code": "10000043",
          "description": "Açúcar / Substitutos do Açúcar (Não perecível)"
        },
        "ncm": {
          "code": "17011400",
          "description": "Outros açúcares de cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Açúcares brutos sem adição de aromatizantes ou de corantes: - Outros açúcares de cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR PICININ",
        "gtin": 7896864400222,
        "width": null,
        "height": null,
        "length": null,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2014-04-24T11:07:34.000-03:00",
        "updated_at": "2022-06-22T08:37:22.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7896864400222,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/9CE708CA04D66D35FF379D56CCB4AAB3.png",
        "brand": {
          "name": "PICININ",
          "picture": "/assets/brand-placeholder-7080174fbd24025783105a607811edad.png"
        },
        "gpc": {
          "code": "10000043",
          "description": "Açúcar / Substitutos do Açúcar (Não perecível)"
        },
        "ncm": {
          "code": "17019900",
          "description": "Outros",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Outros: - Outros",
          "ex": null
        }
      },
      {
        "description": "ACUCAR CONFEITEIRO",
        "gtin": 7897077808287,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 1,
        "gross_weight": 1,
        "created_at": "2014-04-24T11:07:34.000-03:00",
        "updated_at": "2023-01-14T01:00:36.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7897077808287,
            "commercial_unit": {
              "type_packaging": "Fardo",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/02E20FA0ACC2BAF50655016FAA71E030.png",
        "gpc": {
          "code": "10000043",
          "description": "Açúcar / Substitutos do Açúcar (Não perecível)"
        },
        "ncm": {
          "code": "17011300",
          "description": "Açúcar de cana mencionado na Nota de subposição 2 do presente Capítulo",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Açúcares brutos sem adição de aromatizantes ou de corantes: - Açúcar de cana mencionado na Nota de subposição 2 do presente Capítulo",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 1KG",
        "gtin": 7898042070029,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:18:46.000-03:00",
        "updated_at": "2023-01-16T11:39:34.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898042070029,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/BAC1922C01DFD56A5537925F49DF98BD.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 2KG",
        "gtin": 7898355600142,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:36:15.000-03:00",
        "updated_at": "2022-08-04T13:24:00.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898355600142,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/7A36EFA4C1C59AE4DE5D44543D2138AF.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "CHICLE LIXX S / AÇUCAR .",
        "gtin": 7896321007193,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2017-06-13T14:39:58.000-03:00",
        "updated_at": "2021-04-08T14:09:32.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7896321007193,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/5E7C5F36FAC8B713E73437C079390071.png",
        "brand": {
          "name": "LIXX",
          "picture": "/assets/brand-placeholder-7080174fbd24025783105a607811edad.png"
        },
        "ncm": {
          "code": "17041000",
          "description": "Gomas de mascar (Pastilhas elásticas*), mesmo revestidas de açúcar",
          "full_description": "Açúcares e produtos de confeitaria - Produtos de confeitaria sem cacau (incluindo o chocolate branco). - Gomas de mascar (Pastilhas elásticas*), mesmo revestidas de açúcar",
          "ex": null
        }
      },
      {
        "description": "ACUCAR MASCAVO 350G",
        "gtin": 7898957516070,
        "thumbnail": "https://cdn-cosmos.bluesoft.com.br/products/7898957516070",
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": null,
        "gross_weight": null,
        "created_at": "2016-06-07T15:56:47.000-03:00",
        "updated_at": "2023-01-14T01:00:46.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898957516070,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/BA1590FC4D090B0F4E40997738B66EEB.png",
        "brand": {
          "name": "CHOCOLATE VERDE",
          "picture": "/assets/brand-placeholder-7080174fbd24025783105a607811edad.png"
        },
        "ncm": {
          "code": "17019900",
          "description": "Outros",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Outros: - Outros",
          "ex": null
        },
        "cest": {
          "id": 2148,
          "code": "1709900",
          "description": "Açúcar refinado, em embalagens de conteúdo inferior ou igual a 2 kg, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 10 g",
          "parent_id": 1671
        }
      },
      {
        "description": "ACUCAR FEST.CONFEITEIRO 1KG",
        "gtin": 7898264510051,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 1,
        "gross_weight": 1,
        "created_at": "2016-04-06T00:58:07.000-03:00",
        "updated_at": "2022-08-04T12:10:08.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898264510051,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/184BD2B02C56A7EC6587FC66E5F47A0C.png",
        "ncm": {
          "code": "17019900",
          "description": "Outros",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Outros: - Outros",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 1KG",
        "gtin": 7896576200202,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:19:09.000-03:00",
        "updated_at": "2022-11-26T11:10:07.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7896576200202,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/08203CF8014F0597F1EEF2790ACC912F.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 1KG",
        "gtin": 7898994105343,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:19:11.000-03:00",
        "updated_at": "2023-01-16T11:40:00.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898994105343,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/E6E75AC8F64F649DD2402CBA553D3B46.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 5KG",
        "gtin": 7898903262051,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:23:01.000-03:00",
        "updated_at": "2022-12-11T14:02:58.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898903262051,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/11228394632641B28025A773F023259C.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 2KG",
        "gtin": 7898938738026,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:30:34.000-03:00",
        "updated_at": "2023-01-16T11:40:05.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898938738026,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/D07F471A796B2425320CE565D9A6E578.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 1KG",
        "gtin": 7898355600074,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:30:30.000-03:00",
        "updated_at": "2022-11-26T11:10:48.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898355600074,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/7A36EFA4C1C59AE402991D4428667AEC.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 2KG",
        "gtin": 7898368480021,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:25:13.000-03:00",
        "updated_at": "2022-04-11T22:45:55.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898368480021,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/98C4143F0132780ED0A1B98ED64F93F9.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 5KG",
        "gtin": 7898994105398,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:25:15.000-03:00",
        "updated_at": "2022-05-14T15:20:13.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898994105398,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/E6E75AC8F64F649D67A5F8AFE8956108.png",
        "ncm": {
          "code": "17019900",
          "description": "Outros",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Outros: - Outros",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 5KG",
        "gtin": 7898994111917,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:25:21.000-03:00",
        "updated_at": "2022-12-29T11:11:41.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898994111917,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/E6E75AC8F64F649D203862AC2D8731E3.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 5KG",
        "gtin": 7898938738019,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:25:12.000-03:00",
        "updated_at": "2022-11-15T17:43:46.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898938738019,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/D07F471A796B2425EB3619ECD145675C.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 5KG",
        "gtin": 7898368480014,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:25:12.000-03:00",
        "updated_at": "2022-05-23T19:08:44.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898368480014,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/98C4143F0132780E5208E889537837D8.png",
        "ncm": {
          "code": "17019900",
          "description": "Outros",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido. - Outros: - Outros",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 5KG",
        "gtin": 7898926037063,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:33:20.000-03:00",
        "updated_at": "2022-06-04T13:53:25.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898926037063,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/346AF44333E690A6710A32974C51B6D0.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 2KG",
        "gtin": 7898163430023,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:33:20.000-03:00",
        "updated_at": "2023-01-16T14:08:57.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898163430023,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/F0E7D557600E314A4C819EFA8BDD7401.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      },
      {
        "description": "AÇUCAR CRISTAL 5KG",
        "gtin": 7898088870201,
        "width": 0.0,
        "height": 0.0,
        "length": 0.0,
        "net_weight": 0,
        "gross_weight": 0,
        "created_at": "2016-04-06T01:33:20.000-03:00",
        "updated_at": "2021-07-11T10:18:57.000-03:00",
        "release_date": null,
        "price": null,
        "avg_price": null,
        "max_price": 0.0,
        "min_price": 0.0,
        "gtins": [
          {
            "gtin": 7898088870201,
            "commercial_unit": {
              "type_packaging": "Unidade",
              "quantity_packaging": 1,
              "ballast": null,
              "layer": null
            }
          }
        ],
        "origin": "COSMOS",
        "barcode_image": "https://api.cosmos.bluesoft.com.br/products/barcode/4CD3535E6499764EB842313B20C746B6.png",
        "ncm": {
          "code": "17011100",
          "description": "De cana",
          "full_description": "Açúcares e produtos de confeitaria - Açúcares de cana ou de beterraba e sacarose quimicamente pura, no estado sólido - Açúcares em bruto, sem adição de aromatizantes ou de corantes: - De cana",
          "ex": null
        }
      }
    ],
    "current_page": 1,
    "per_page": 30,
    "total_pages": 222,
    "total_count": 6656,
    "next_page": "https://api.cosmos.bluesoft.com.br/products?page=2&query=a%C3%A7ucar"
  }

  if (!name) {
    name = null;
  }

  if (name) {
    const { data } = await api.get(`/products?query=${name}`)

    if (data.message) {
      error = data.message
    }

    if (data.products) {
      dataProducts = data
    }
  }



  return {
    props: {
      dataProducts,
      name,
      error
    }
  }
}
