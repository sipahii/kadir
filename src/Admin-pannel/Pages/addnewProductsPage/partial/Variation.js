import { useEffect, useRef, useState } from "react";
import { AttributeItem } from "../../../Components/addNewProductsComponents/AttributeItem";
import {
  useForm_variatioMutation,
  useGetAttributesQuery,
  useGetCounterQuery,
} from "../../../Components/all-products/allproductsApi/allProductsApi";
import { CustomSelectOption } from "../../../common/CustomMultiselection";

const Variation = ({ item, setattributesVal, setVariantsData }) => {
  const token = window.localStorage.getItem("token");
  const { data: attributesData } = useGetAttributesQuery(token);
  const [allAttributes, setAllAttributes] = useState(
    item?.variation_Form || []
  );
  const [updatedVariants, setUpdatedVariants] = useState(
    item?.variations || []
  );

  const prevAllAttributesRef = useRef();

  const [form_variatio, { data: variationsData }] = useForm_variatioMutation();
  const { data: countryData } = useGetCounterQuery(token);

  useEffect(() => {
    console.log("variationsData", variationsData);

    if (variationsData) {
      setUpdatedVariants(variationsData);
      let variationLists = JSON.parse(JSON.stringify(variationsData));

      variationLists?.forEach((element) => {
        element.prices = [];
        countryData?.forEach((item) => {
          element.prices.push({ country_id: { ...item } });
        });
      });

      console.log("variationLists", variationLists);
      setVariantsData(variationLists);
    }
  }, [variationsData]);

  useEffect(() => {
    const prevAllAttributes = prevAllAttributesRef?.current;
    if (prevAllAttributes?.length > allAttributes?.length) {
      form_variatio({
        data: {
          attributes: [...allAttributes],
          variations: [...updatedVariants],
        },
        token: token,
      });
    }
    setattributesVal(allAttributes);
  }, [allAttributes]);

  const getAttributes = (attributes) => {
    const updateExistingAttribute = attributes.map((secondObj) => {
      const matchingObj = allAttributes.find(
        (originalObj) => originalObj._id === secondObj._id
      );

      if (matchingObj) {
        const updatedObj = { ...secondObj };
        updatedObj.title = matchingObj.title;
        updatedObj.data = matchingObj.data;

        return updatedObj;
      } else {
        return secondObj;
      }
    });

    prevAllAttributesRef.current = allAttributes;
    setAllAttributes(updateExistingAttribute);
  };

  const getChoiceValues = (choiceValues, currentAttr) => {
    callVariationAPi(currentAttr);
  };

  const callVariationAPi = (currentAttr) => {
    const clone = [...allAttributes];

    const findIndex = clone.findIndex(({ _id }) => _id === currentAttr?.id);

    if (findIndex !== -1) {
      const findCurrentAttributes = { ...clone[findIndex] };
      findCurrentAttributes.data = [...currentAttr?.data];
      findCurrentAttributes.title = currentAttr?.title;

      clone[findIndex] = findCurrentAttributes;
    }
    let filteredData = clone.filter((item) => item?.data?.length);

    setAllAttributes(clone);
    console.log(clone);

    form_variatio({
      data: {
        attributes: [...filteredData],
        variations: [...updatedVariants],
      },
      token: token,
    });
    setattributesVal(allAttributes);
  };

  return (
    <div
      className="card mt-2 rest-part physical_product_show"
      data-select2-id={176}
    >
      <div className="card-header">
        <h4 className="mb-0">Variation</h4>
      </div>
      <div
        className="col-lg-12"
        style={{ padding: 25 + "px", margin: 5 + "px" }}
      >
        <div className="row">
          <div className="col-lg-6">
            <CustomSelectOption
              allAttributes={allAttributes}
              data={attributesData}
              showCheckbox={true}
              getSelectedOptions={getAttributes}
            >
              <label>Attributes:</label>
            </CustomSelectOption>
          </div>

          <div className="col-lg-12 mt-3">
            {allAttributes?.map((item) => {
              return (
                <AttributeItem
                  key={item._id}
                  item={item}
                  handleChoiceValues={getChoiceValues}
                  setUpdatedVariants={setUpdatedVariants}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variation;
