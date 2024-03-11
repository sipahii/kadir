import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AttributeItem = ({
  item,
  handleChoiceValues,
  isSuccess,
  isLoading,
  setUpdatedVariants,
}) => {
  const [tags, setTags] = useState(item?.data);
  const params = useParams();

  function handleTagKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    else {
      const clone = tags ? tags : [];
      setTags([...clone, value]);
      handleChoiceValues(tags, {
        id: item._id || item.id,
        title: item.name ? item.name : item.title,
        data: [...clone, value] || "",
      });
    }
    e.target.value = "";
  }

  const removetagTag = (index) => [
    setTags(tags.filter((el, i) => i !== index)),
  ];

  // useEffect(() => {
  //   // if (!tags?.length) {
  //   //     setUpdatedVariants([])
  //   // }
  //   if (tags?.length) {
  //     handleChoiceValues(tags, {
  //       id: item._id || item.id,
  //       title: item.name ? item.name : item.title,
  //       data: tags ? [...tags] : "",
  //     });
  //   } else if (isSuccess) {
  //     handleChoiceValues(tags, {
  //       id: item._id || item.id,
  //       title: item.name ? item.name : item.title,
  //       data: tags ? [...tags] : "",
  //     });
  //   }
  // }, [tags]);
  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="form-group">
          <input
            type="text"
            disabled
            className="form-control"
            defaultValue={item?.name ? item?.name : item?.title}
          />
        </div>
      </div>
      <div className="col-lg-9">
        <div className="tags_inp_wrapper">
          <div className="tags-input-container">
            {tags?.map((tag, index) => {
              return (
                <div className="tag-item" key={index}>
                  <span className="text">{tag}</span>
                  <span className="close" onClick={() => removetagTag(index)}>
                    &times;
                  </span>
                </div>
              );
            })}
            <input
              type="text"
              onKeyDown={handleTagKeyDown}
              placeholder="Enter Choice Value"
              className="tags-input"
              name="attributes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
