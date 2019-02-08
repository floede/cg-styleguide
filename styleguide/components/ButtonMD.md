Button variations:

```jsx
<div class="presentationWrapper">
  <table>
    <tr>
      <td>
        <ButtonMD onClick={e => console.log("Clicked")}>Default</ButtonMD>
      </td>
      <td>
        <ButtonMD type="primary" onClick={e => console.log("Clicked")}>
          Primary
        </ButtonMD>
      </td>
      <td>
        <ButtonMD type="secondary" onClick={e => console.log("Clicked")}>
          Secondary
        </ButtonMD>
      </td>
      <td>
        <ButtonMD type="danger" onClick={e => console.log("Clicked")}>
          Danger
        </ButtonMD>
      </td>
    </tr>

    <tr>
      <td>
        <ButtonMD
          variation="grey-background"
          size="small"
          onClick={e => console.log("Clicked")}
        >
          Default
        </ButtonMD>
      </td>
      <td>
        <ButtonMD
          type="primary"
          variation="grey-background"
          onClick={e => console.log("Clicked")}
        >
          Primary
        </ButtonMD>
      </td>
      <td>
        <ButtonMD
          variation="grey-background"
          type="secondary"
          onClick={e => console.log("Clicked")}
        >
          Secondary
        </ButtonMD>
      </td>
      <td>
        <ButtonMD
          variation="grey-background"
          type="danger"
          onClick={e => console.log("Clicked")}
        >
          Danger
        </ButtonMD>
      </td>
    </tr>

    <tr>
      <td>
        <ButtonMD variation="flat" onClick={e => console.log("Clicked")}>
          Default
        </ButtonMD>
      </td>
      <td>
        <ButtonMD
          variation="flat"
          type="primary"
          onClick={e => console.log("Clicked")}
        >
          Primary
        </ButtonMD>
      </td>
      <td>
        <ButtonMD
          variation="flat"
          type="secondary"
          onClick={e => console.log("Clicked")}
        >
          Secondary
        </ButtonMD>
      </td>
      <td>
        <ButtonMD
          variation="flat"
          type="danger"
          onClick={e => console.log("Clicked")}
        >
          Danger
        </ButtonMD>
      </td>
    </tr>

    <tr>
      <td>
        <ButtonMD variation="raised" onClick={e => console.log("Clicked")}>
          Default
        </ButtonMD>
      </td>
      <td>
        <ButtonMD
          variation="raised"
          type="primary"
          onClick={e => console.log("Clicked")}
        >
          Primary
        </ButtonMD>
      </td>
      <td>
        <ButtonMD
          variation="raised"
          type="secondary"
          onClick={e => console.log("Clicked")}
        >
          Secondary
        </ButtonMD>
      </td>
      <td>
        <ButtonMD
          variation="raised"
          type="danger"
          onClick={e => console.log("Clicked")}
        >
          Danger
        </ButtonMD>
      </td>
    </tr>
  </table>
</div>
```

Button sizes:

```jsx
<ButtonMD onClick={e => console.log("Clicked")}>
  Default / Small
</ButtonMD>

<ButtonMD size="Medium" onClick={e => console.log("Clicked")}>
  Medium
</ButtonMD>

<ButtonMD size="large" onClick={e => console.log("Clicked")}>
  Large
</ButtonMD>
```

Button variations:

```jsx
  <ButtonMD onClick={e => console.log("Clicked")} variation="default">
    Default
  </ButtonMD>

  <ButtonMD onClick={e => console.log("Clicked")} variation="flat">
    Flat
  </ButtonMD>

  <ButtonMD onClick={e => console.log("Clicked")} variation="raised">
    Raised
  </ButtonMD>
```

Icon row:

```jsx
          <ButtonMD
            variation="flat"
            onClick={this.onClickLike}
            icon={"icon-levelstats_like"}
            class=""
          >
            100
          </ButtonMD>

          <ButtonMD
            variation="flat"
            onClick={this.onClickFavourite}
            icon={"icon-levelstats_favourites"}
            class=""
          >
            0
          </ButtonMD>


        <span class="divider" />

          <ButtonMD
            variation="flat"
            disabled
            onClick={null}
            icon={"icon-levelstats_plays"}
            class="dark-grey"
          >
            5
          </ButtonMD>

          <ButtonMD
            variation="flat"
            disabled
            onClick={null}
            icon={"icon-levelstats_comments"}
            class="dark-grey"
          >
            10
          </ButtonMD>

```
