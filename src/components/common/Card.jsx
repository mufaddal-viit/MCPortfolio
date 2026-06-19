import { cn } from "@/lib/utils";

/**
 * Shared card surface that gives every panel (projects, certs, blogs, skills)
 * the same border, elevation and hover language.
 *
 * @param {object} props
 * @param {boolean} [props.interactive=false] - Adds lift + glow on hover.
 * @param {React.ElementType} [props.as="div"] - Element/component to render.
 */
const Card = ({ interactive = false, as: Tag = "div", className = "", children, ...rest }) => {
  return (
    <Tag
      className={cn(interactive ? "card-interactive" : "card", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Card;
