/**
 * Fills the empty trailing cells of a hairline grid.
 *
 * The card grids across the site are built as a `gap-px` grid over a `bg-border`
 * parent, so the 1px gaps read as hairline rules between cards. When the item
 * count does not divide evenly into the column count, the leftover cells expose
 * the parent background and render as a solid grey block. These fillers occupy
 * those cells so the grid ends cleanly at every breakpoint.
 *
 * Grids are single-column below `md`, so fillers are always hidden at base.
 */
interface GridFillProps {
  /** Number of real cards in the grid. */
  items: number;
  /** Columns from the `md` breakpoint up. */
  md: number;
  /** Columns from the `lg` breakpoint up. Defaults to the `md` count. */
  lg?: number;
  /** Background of the filler cell. Match the cards in the grid. */
  className?: string;
}

export const GridFill = ({ items, md, lg, className = "bg-background" }: GridFillProps) => {
  const missing = (cols: number) => (cols > 1 ? (cols - (items % cols)) % cols : 0);

  const mdFill = missing(md);
  const lgFill = missing(lg ?? md);
  const total = Math.max(mdFill, lgFill);

  if (total === 0) return null;

  return (
    <>
      {Array.from({ length: total }, (_, i) => {
        const atMd = i < mdFill;
        const atLg = i < lgFill;
        const visibility = atMd
          ? atLg
            ? "hidden md:block"
            : "hidden md:block lg:hidden"
          : "hidden lg:block";

        return (
          <div key={i} aria-hidden="true" className={`${visibility} ${className}`} />
        );
      })}
    </>
  );
};
