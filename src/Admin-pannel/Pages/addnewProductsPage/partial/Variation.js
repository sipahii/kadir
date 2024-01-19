import { useEffect, useRef, useState } from "react";
import { AttributeItem } from "../../../Components/addNewProductsComponents/AttributeItem";
import {
  useForm_variatioMutation,
  useGetAttributesQuery,
  useGetCounterQuery,
} from "../../../Components/all-products/allproductsApi/allProductsApi";
import { CustomSelectOption } from "../../../common/CustomMultiselection";

const Variation = ({
  setattributesVal,
  setVariantsData,
  variationForm,
  variations,
}) => {
  const token = window.localStorage.getItem("token");
  const { data: attributesData } = useGetAttributesQuery(token);
  const prevAllAttributesRef = useRef();
  prevAllAttributesRef.current = variationForm || [];

  const [form_variatio, { data: variationsData }] = useForm_variatioMutation();
  const { data: countryData } = useGetCounterQuery(token);

  useEffect(() => {
    if (variationsData) {
      let variationLists = JSON.parse(JSON.stringify(variationsData));

      variationLists?.forEach((element) => {
        element.prices = [];
        countryData?.forEach((item) => {
          element.prices.push({ country_id: { ...item } });
        });
      });
      setVariantsData(variationLists);
    }
  }, [variationsData]);

  useEffect(() => {
    console.log("variationForm", variationForm);
    console.log("variationForm2", variations);
    return () => {
      console.log("variationForm", variationForm);
      console.log("variationForm2", variations);
    };
  }, []);

  useEffect(() => {
    const prevAllAttributes = prevAllAttributesRef?.current;
    if (prevAllAttributes?.length > variationForm?.length) {
      form_variatio({
        data: {
          attributes: [...variationForm],
          variations: [...variations],
        },
        token: token,
      });
      setattributesVal(variationForm || []);
    }
  }, [variationForm]);

  const getAttributes = (attributes) => {
    const updateExistingAttribute = attributes?.map((secondObj) => {
      const matchingObj = variationForm.find(
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

    prevAllAttributesRef.current = variationForm;
    setattributesVal(updateExistingAttribute || []);
  };

  const getChoiceValues = (choiceValues, currentAttr) => {
    callVariationAPi(currentAttr);
  };

  const callVariationAPi = (currentAttr) => {
    const clone = [...variationForm];
    const findIndex = clone.findIndex(({ _id }) => _id === currentAttr?.id);

    if (findIndex !== -1) {
      const findCurrentAttributes = { ...clone[findIndex] };
      findCurrentAttributes.data = [...currentAttr?.data];
      findCurrentAttributes.title = currentAttr?.title;

      clone[findIndex] = findCurrentAttributes;
    }
    let filteredData = clone.filter((item) => item?.data?.length);

    form_variatio({
      data: {
        attributes: [...filteredData],
        variations: [...variations],
      },
      token: token,
    });
    setattributesVal(clone || []);
  };

  return (
    attributesData && (
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
                allAttributes={variationForm}
                data={attributesData}
                showCheckbox={true}
                getSelectedOptions={getAttributes}
              >
                <label>Attributes:</label>
              </CustomSelectOption>
            </div>

            <div className="col-lg-12 mt-3">
              {variationForm?.map((item) => {
                return (
                  <AttributeItem
                    key={item._id}
                    item={item}
                    handleChoiceValues={getChoiceValues}
                    setUpdatedVariants={setVariantsData}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Variation;
