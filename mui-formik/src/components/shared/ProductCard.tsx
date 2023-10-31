import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { IProduct } from "../product/productTypes";
import { Grid } from "@mui/material";
import useProduct from "../product/useProduct";
import useShared from "./hooks/useShared";
import useStore from "../../store/store";

interface Props {
  product: IProduct;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { purchaseProduct } = useProduct();
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const { navigate } = useShared();
  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} height={"100%"}>
      <Card
        sx={{
          width: 320,
          maxWidth: "100%",
          minHeight: "440px",
          boxShadow: "lg",
          my: 3,
        }}
      >
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img
              src={
                product.image ||
                "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
              }
              srcSet={
                product.image ||
                "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
              }
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="body-xs">{product.brand}</Typography>
          <Link
            href="#product-card"
            fontWeight="md"
            color="neutral"
            textColor="text.primary"
            overlay
            endDecorator={<ArrowOutwardIcon />}
          >
            {product.name}
          </Link>
          <Typography level="body-sm">{product.description}</Typography>
          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: "xl" }}
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                Lowest price
              </Chip>
            }
          >
            E {product.price} per month
          </Typography>
          <Typography level="body-sm">
            (Only <b>{product.countInStock}</b> left in stock!)
          </Typography>
        </CardContent>
        <CardOverflow>
          {isLoggedIn ? (
            <Button
              variant="solid"
              color="primary"
              size="lg"
              onClick={() => purchaseProduct(product)}
            >
              Subscribe
            </Button>
          ) : (
            <>
              <Button
                variant="solid"
                color="primary"
                size="lg"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login to Subscribe
              </Button>
            </>
          )}
        </CardOverflow>
      </Card>
    </Grid>
  );
};

export default ProductCard;
